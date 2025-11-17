import { useState, useEffect, useRef } from 'react';
import NavBar from '../components/navbar';

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
      </>
  );
}

export default Ler;