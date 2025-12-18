import { useEffect, useState } from "react";
import axios from "axios";
import QRCode from "react-qr-code";
import logo from "../assets/logo.png";
import "../css/menu.css"; // Reaproveitando estilos do menu

function GerarQR() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        // Busca os dados do usuário logado
        const response = await axios.get("http://localhost:3000/api/users", {
          withCredentials: true
        });
        setUsuario(response.data);
      } catch (error) {
        console.error("Erro ao carregar dados para o QR Code:", error);
      } finally {
        setLoading(false);
      }
    };

    buscarDados();
  }, []);

  // Prepara o valor do QR Code: se o usuário existir, transforma o objeto em String
  // Caso contrário, mantém vazio ou uma mensagem de erro
  const valorParaQR = usuario ? JSON.stringify(usuario) : "";

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Identidade Visual Capivac */}
      <div className="area-logo">
        <img src={logo} width="100" height="100" alt="Capivac Logo" />
        <h1>Capivac</h1>
      </div>

      <div className="form-div" style={{ margin: "20px auto", padding: "40px", maxWidth: "400px" }}>
        <h2 className="login" style={{ marginBottom: "20px" }}>Meu QR-Code</h2>
        
        {loading ? (
          <p>Gerando seu código identificador...</p>
        ) : usuario ? (
          <>
            <div style={{ background: "white", padding: "16px", borderRadius: "10px", display: "inline-block" }}>
              <QRCode
                value={valorParaQR} 
                size={256}
                level="H" // Nível alto de correção de erro para facilitar a leitura
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              />
            </div>
            <h3 style={{ marginTop: "20px", color: "#333" }}>{usuario.nome}</h3>
            <p className="card-text" style={{ fontSize: "14px", color: "#666" }}>
              Apresente este código ao profissional de saúde no momento da vacinação.
            </p>
          </>
        ) : (
          <p style={{ color: "red" }}>Erro ao carregar dados. Tente fazer login novamente.</p>
        )}
      </div>

      <button 
        className="entrar-btn" 
        style={{ maxWidth: "200px", marginTop: "20px", backgroundColor: "#888" }}
        onClick={() => window.history.back()}
      >
        Voltar
      </button>
    </div>
  );
}

export default GerarQR;