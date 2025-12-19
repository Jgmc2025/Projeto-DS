import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jsQR from 'jsqr'; // Importando a biblioteca compatível
import NavBar from '../components/navbar';
import ModalConfirmacao from "../components/modalConfirmacao";
import logo from "../assets/logo.png";

function Ler() {
  const navigate = useNavigate();
  const [data, setData] = useState('Aponte a câmera para o QR Code');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Estados do form
  const [usuarioId, setUsuarioId] = useState("");
  const [cpf, setCpf] = useState("");
  const [vacinaId, setVacinaId] = useState("");
  const [local, setLocal] = useState("");
  const [vacinasDisponiveis, setVacinasDisponiveis] = useState([]);

  const videoRef = useRef(null);
  const canvasRef = useRef(document.createElement("canvas")); // Canvas invisível para processar imagem
  const streamRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/vaccine", { withCredentials: true })
      .then(res => setVacinasDisponiveis(res.data.vaccines))
      .catch(err => console.error("Erro ao carregar vacinas", err));
  }, []);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
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
        videoRef.current.setAttribute("playsinline", true); // necessário para iOS
        videoRef.current.play();
      }

      const tick = () => {
        if (videoRef.current && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
          const canvas = canvasRef.current;
          const video = videoRef.current;
          
          canvas.height = video.videoHeight;
          canvas.width = video.videoWidth;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: "dontInvert",
          });

          if (code) {
            try {
              const userObj = JSON.parse(code.data);
              if (userObj.id && userObj.cpf) {
                setUsuarioId(userObj.id);
                setCpf(userObj.cpf);
                setData(`Paciente: ${userObj.nome}`);
                setIsOpen(true);
                stopCamera();
                return; // Sai do loop
              }
            } catch (e) {
              setData("QR Code inválido.");
            }
          }
        }
        requestRef.current = requestAnimationFrame(tick);
      };
      requestRef.current = requestAnimationFrame(tick);

    } catch (err) {
      setData('Erro ao acessar a câmera.');
    }
  };

  useEffect(() => {
    if (!isOpen) startScan();
    return () => stopCamera();
  }, [isOpen]);

  const handleSubmitVacina = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:3000/api/vaccinate-user", {
        usuarioId: Number(usuarioId),
        cpf: cpf,
        vacinaId: Number(vacinaId),
        dataAplicacao: new Date().toISOString(),
        localAplicacao: local
      }, { withCredentials: true });
      alert("Vacinação registrada!");
      setIsOpen(false);
      navigate("/menu-funcionario");
    } catch (error) {
      alert(error.response?.data?.message || "Erro no registro.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="area-logo" style={{ marginTop: '20px' }}>
        <img src={logo} width="80" height="80" alt="logo" />
        <h1>Escanear QR-Code</h1>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', border: '4px solid #a4d7a7' }}>
          <video 
            ref={videoRef} 
            style={{ width: '100%', maxWidth: '400px', backgroundColor: '#000' }}
          ></video>
          {/* Overlay visual para ajudar o usuário */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px', height: '200px',
            border: '2px solid rgba(255,255,255,0.5)',
            borderRadius: '10px', pointerEvents: 'none'
          }}></div>
        </div>
        <p style={{ marginTop: '15px', fontWeight: 'bold' }}>{data}</p>
        
        <button 
          className="entrar-btn" 
          onClick={() => { stopCamera(); setIsOpen(true); }}
          style={{ backgroundColor: '#7ec8e3', width: '220px', marginTop: '20px' }}
        >
          Inserir Manualmente
        </button>
      </div>

      <ModalConfirmacao open={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmitVacina} style={{ display: "flex", flexDirection: "column", width: "280px", gap: "15px" }}>
          <h2 style={{ textAlign: "center" }}>Validar Vacina</h2>
          <input required placeholder="ID do usuario" type="number" value={usuarioId} onChange={(e)=>setUsuarioId(e.target.value)} className="senha" style={{width: "80%", margin: "auto"}}/>
          <input required placeholder="CPF" value={cpf} onChange={(e)=>setCpf(e.target.value)} className="senha" style={{width: "80%", margin: "auto"}}/>
          <select required name="vacina" className="senha" style={{width: "80%", margin: "auto"}}>
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
          <input placeholder="Local" value={local} onChange={(e)=>setLocal(e.target.value)} className="senha" style={{width: "80%", margin: "auto"}}/>
          <button className="entrar-btn" type="submit" disabled={loading} style={{width: "80%", margin: "auto"}}>{loading ? "Salvando..." : "Validar"}</button>
        </form>
      </ModalConfirmacao>
    </>
  );
}

export default Ler;