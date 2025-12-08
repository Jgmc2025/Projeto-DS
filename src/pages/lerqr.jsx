import { useState, useEffect, useRef } from 'react';
import NavBar from '../components/navbar';
import ModalConfirmacao from "../components/modalConfirmacao";

function Ler({ onSucesso }) {
  const [data, setData] = useState('Aponte a câmera para um QR Code');
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const requestRef = useRef(null);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
      setData('Câmera parada.');
    }
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = null;
    }
  };

  const startScan = async () => {

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      streamRef.current = stream; 

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch(e => console.error("Erro ao iniciar play", e));
      }
      const detect = async () => {
        if (!videoRef.current || videoRef.current.readyState < 2) {
          requestRef.current = requestAnimationFrame(detect);
          return;
        }

        try {
          const barcodes = await barcodeDetector.detect(videoRef.current);
          
          if (barcodes.length > 0) {
            const decodedText = barcodes[0].rawValue;
            setData(`Lido: ${decodedText}`);

            if (decodedText === 'Validado com sucesso! \nVocê ganhou 250 Capibas.') {
              setData(`Sucesso! ${decodedText}`);
            
              stopCamera();

              if (onSucesso) {
                onSucesso(decodedText);
              }
            } else {
              setData('QR Code inválido. Tente novamente.');
              requestRef.current = requestAnimationFrame(detect);
            }
          } else {
            requestRef.current = requestAnimationFrame(detect);
          }
        }catch (e) {
          console.error('Erro na detecção:', e);
        }
      };
      requestRef.current = requestAnimationFrame(detect);

    } catch (err) {
      console.error('Erro ao acessar a câmera:', err);
      if (err.name === 'NotAllowedError') {
        setData('Você precisa dar permissão para usar a câmera.');
      } else {
        setData('Erro ao iniciar a câmera.');
      }
    }
  };

  useEffect(() => {
    startScan();

    return () => {
      stopCamera();
    };
  }, [onSucesso]); 
  const [isOpen, setIsOpen] = useState(false);
  const nome = "Ítalo Oliveira Borges";
  const cpf = "10294182479";

  return (
    <>
      <NavBar />
      <div className="p-4 w-full max-w-md mx-auto">
        <video 
          ref={videoRef} 
          playsInline 
          autoPlay
          muted
          className="w-full h-auto rounded-lg border"
          style={{ transform: 'scaleX(-1)' }}
        ></video>
        <p className="mt-4 text-center font-medium">{data}</p>
      </div>

        <button onClick={() => setIsOpen(true)}>Abrir</button>
        <ModalConfirmacao open={isOpen} onClose = {() => setIsOpen(false)}>
          <form style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "200px", gap: "20px"}}>
            <h2 style={{textAlign: "center"}}>Validar Vacina</h2>
            <div style={{ display: "flex", flexDirection: "column", }}>
              <h3 style={{margin: 0, }}>Usuário</h3>
              <p style={{margin: 0, }}>{nome}</p>
            </div>
            <div>
              <h3 style={{margin: 0, }}>CPF</h3>
              <p style={{margin: 0, }}>{cpf}</p>
            </div>
              <div style={{ display: "flex", flexDirection: "column", }}>
                <h3 style={{margin: 0, }}>Vacina</h3>
                <select required name="vacina" style={{margin: 0, backgroundColor: "white" , color: "black", height: "30px", borderRadius: "5px"}}>
                  <option value="bcg">BCG</option>
                  <option value="hep b">Hepatite B</option>
                  <option value="penta">Penta</option>
                  <option value="polio">Pólio inativada</option>
                  <option value="rotavirus">Rotavírus</option>
                  <option value="pneumo 10">Pneumo 10</option>
                  <option value="meningo c">Meningo C</option>
                  <option value="febre amarela">Febre Amarela</option>
                  <option value="triplice viral">Tríplice viral</option>
                  <option value="tetra viral">Tetra viral</option>
                  <option value="dtp">DTP</option>
                  <option value="varicela">Varicela</option>
                  <option value="dt">dT</option>
                  <option value="meningococica acwy">Meningocócica ACWY</option>
                  <option value="hpv quadrivalente">HPV quadrivalente</option>
                  <option value="dtpa">dTpa</option>
                  <option value="covid-19">Covid-19</option>
                  <option value="pneumo 23">Pneumo 23</option>
                </select>
              </div>
              <button style={{marginBottom: "20px", backgroundColor: "white", borderColor: "blue", color: "black", height: "35px", marginTop: "10px"}} type="submit">Validar</button>
            </form>
        </ModalConfirmacao>
      </>
  );
}

export default Ler;