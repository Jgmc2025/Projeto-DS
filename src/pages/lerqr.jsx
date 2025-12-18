import { useState, useEffect, useRef } from 'react';
import NavBar from '../components/navbar';
import ModalConfirmacao from "../components/modalConfirmacao";
import api from "../services/api"; // Certifique-se que esse arquivo existe em src/services/api.js

function Ler() {
  const [mensagem, setMensagem] = useState('Aponte a câmera para o QR Code do CPF');
  const [usuarioDetectado, setUsuarioDetectado] = useState(null); // Guarda os dados do usuário lido
  const [modalAberto, setModalAberto] = useState(false);
  const [vacinaSelecionada, setVacinaSelecionada] = useState("covid-19");
  const [carregando, setCarregando] = useState(false);

  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const requestRef = useRef(null);

  // Função para parar a câmera
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

  // Função Principal de Escaneamento
  const startScan = async () => {
    // Verifica se o navegador suporta a detecção nativa (Chrome/Android geralmente suportam)
    if (!('BarcodeDetector' in window)) {
      setMensagem("Seu navegador não suporta leitura de QR Code nativa. Use o Chrome ou Edge.");
      return;
    }

    try {
      const barcodeDetector = new window.BarcodeDetector({ formats: ['qr_code'] });
      
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' } // Tenta usar a câmera traseira
      });
      
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch(e => console.error("Erro no play:", e));
      }

      const detect = async () => {
        // Se a câmera não estiver pronta, tenta no próximo frame
        if (!videoRef.current || videoRef.current.readyState < 2) {
          requestRef.current = requestAnimationFrame(detect);
          return;
        }

        try {
          const barcodes = await barcodeDetector.detect(videoRef.current);
          
          if (barcodes.length > 0) {
            const codigoLido = barcodes[0].rawValue;
            
            // --- LÓGICA DE VALIDAÇÃO DO CPF ---
            // Vamos assumir que o QR code contém apenas os números do CPF ou o CPF formatado
            // Removemos tudo que não é número para garantir
            const cpfLimpo = codigoLido.replace(/\D/g, "");

            if (cpfLimpo.length === 11) {
              stopCamera(); // Para a câmera para não ler 1000 vezes
              setMensagem("Lendo dados do usuário...");
              buscarUsuario(cpfLimpo); // Vai no backend buscar o nome
            } else {
              setMensagem(`QR Lido: ${codigoLido} (Não parece um CPF válido)`);
              // Continua escaneando se não for CPF
              requestRef.current = requestAnimationFrame(detect);
            }

          } else {
            // Se não achou nada, continua procurando no próximo frame
            requestRef.current = requestAnimationFrame(detect);
          }
        } catch (e) {
          console.error('Erro na detecção:', e);
          requestRef.current = requestAnimationFrame(detect);
        }
      };

      requestRef.current = requestAnimationFrame(detect);

    } catch (err) {
      console.error('Erro ao iniciar câmera:', err);
      setMensagem('Erro ao acessar a câmera. Verifique as permissões.');
    }
  };

  // Busca o usuário no backend
  async function buscarUsuario(cpf) {
    try {
        const response = await api.get(`/vaccinate-user/buscar-por-cpf/${cpf}`);
        setUsuarioDetectado(response.data);
        setModalAberto(true); // Abre o modal automaticamente
        setMensagem("Usuário encontrado!");
    } catch (error) {
        console.error(error);
        alert("Usuário não encontrado no sistema com este CPF.");
        setMensagem("Usuário não encontrado. Tente novamente.");
        // Reinicia o scan depois de um tempo se quiser
    }
  }

  // Envia a vacinação para o backend
  async function confirmarVacinacao(e) {
      e.preventDefault();
      if (!usuarioDetectado) return;

      try {
          setCarregando(true);
          await api.post('/vaccinate-user', {
              usuarioId: usuarioDetectado.id,
              vacinaNome: vacinaSelecionada,
              lote: "LOTE-APP", // Pode adicionar um input para isso depois
              local: "App Mobile"
          });

          alert(`Vacinação registrada com sucesso!\n${usuarioDetectado.nome} ganhou 50 Capibas.`);
          setModalAberto(false);
          setUsuarioDetectado(null);
          setMensagem("Pronto para o próximo.");
          // Reinicia a câmera para o próximo da fila
          startScan();

      } catch (error) {
          console.error(error);
          alert(error.response?.data?.message || "Erro ao registrar vacina.");
      } finally {
          setCarregando(false);
      }
  }

  // Inicia a câmera ao entrar na tela
  useEffect(() => {
    startScan();
    return () => stopCamera();
  }, []);

  return (
    <>
      <NavBar />
      <div className="p-4 w-full max-w-md mx-auto" style={{padding: '20px', textAlign: 'center'}}>
        
        <div style={{border: '2px solid #ccc', borderRadius: '10px', overflow: 'hidden', marginBottom: '10px'}}>
            <video 
            ref={videoRef} 
            playsInline 
            autoPlay
            muted
            style={{ width: '100%', height: 'auto', display: 'block' }}
            ></video>
        </div>

        <p className="mt-4 text-center font-medium" style={{color: 'white', fontSize: '18px'}}>{mensagem}</p>
        
        {/* Botão de reiniciar caso trave ou cancele */}
        {!modalAberto && (
            <button onClick={startScan} style={{marginTop: '10px', padding: '10px', cursor: 'pointer'}}>
                Reiniciar Câmera
            </button>
        )}
      </div>

      {/* --- MODAL DE CONFIRMAÇÃO --- */}
      <ModalConfirmacao open={modalAberto} onClose={() => { setModalAberto(false); startScan(); }}>
          {usuarioDetectado && (
            <form onSubmit={confirmarVacinacao} style={{display: "flex", flexDirection: "column", gap: "15px", minWidth: "250px"}}>
                <h2 style={{textAlign: "center", color: "#000"}}>Validar Vacina</h2>
                
                <div>
                    <h3 style={{margin: 0, fontSize: "14px", color: "#666"}}>Nome do Cidadão</h3>
                    <p style={{margin: 0, fontWeight: "bold", color: "#000", fontSize: "16px"}}>{usuarioDetectado.nome}</p>
                </div>
                
                <div>
                    <h3 style={{margin: 0, fontSize: "14px", color: "#666"}}>CPF</h3>
                    <p style={{margin: 0, fontWeight: "bold", color: "#000"}}>{usuarioDetectado.cpf}</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label style={{margin: 0, fontSize: "14px", color: "#666"}}>Vacina Aplicada</label>
                    <select 
                        required 
                        value={vacinaSelecionada}
                        onChange={(e) => setVacinaSelecionada(e.target.value)}
                        style={{marginTop: "5px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc", backgroundColor: "white", color: "black"}}
                    >
                    <option value="covid-19">Covid-19</option>
                    <option value="Influenza (Gripe)">Influenza (Gripe)</option>
                    <option value="bcg">BCG</option>
                    <option value="Hepatite B">Hepatite B</option>
                    <option value="febre amarela">Febre Amarela</option>
                    <option value="hpv">HPV</option>
                    </select>
                </div>

                <button 
                    type="submit" 
                    disabled={carregando}
                    style={{
                        marginTop: "10px", 
                        backgroundColor: carregando ? "#ccc" : "#0056b3", 
                        color: "white", 
                        border: "none",
                        padding: "10px",
                        borderRadius: "5px",
                        cursor: carregando ? "not-allowed" : "pointer",
                        fontWeight: "bold"
                    }}
                >
                    {carregando ? "Registrando..." : "Confirmar Vacinação"}
                </button>
            </form>
          )}
      </ModalConfirmacao>
    </>
  );
}

export default Ler;