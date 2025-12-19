import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";
import "../css/menu.css";

function Menu() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const buscarDadosUsuario = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users", {
          withCredentials: true 
        });
        setUsuario(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        if (error.response && error.response.status === 401) {
          navigate("/");
        }
      }
    };
    buscarDadosUsuario();
  }, [navigate]);

  // Função de Logout
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/logout", {}, { withCredentials: true });
      alert("Deslogado com sucesso!")
      navigate("/");
    } catch (error) {
      console.error("Erro ao sair:", error);
      navigate("/");
    }
  };

  return (
    <>
      <header className="header-container">
        {/* Logo Centralizada */}
        <div className="area-logo">
          <img src={logo} width="100" height="100" alt="Capivac Logo" />
          <h1>Capivac</h1>
        </div>

        {/* Botão de Logout no Canto Direito */}
        <button className="logout-btn" onClick={handleLogout}>
          Sair
        </button>
      </header>
      
      <div className="user-info-bar">
        {usuario ? (
          <div className="info-content">
            <span className="welcome-text">
              Bem-vindo, <strong>{usuario.nome ? usuario.nome.split(' ')[0] : "Usuário"}</strong>
            </span>
            
            <div className="user-data">
              <span className="info-item"><strong>CPF:</strong> {usuario.cpf}</span>            
              <span className="info-item"><strong>Bairro:</strong> {usuario.bairro}</span>
            </div>
          </div>
        ) : (
          <p className="loading-text">Carregando perfil...</p>
        )}
      </div>

      <p className="subtitle">
        Sistema de incentivo de vacinação no Recife
        <br />
        Simples, rápido e seguro
      </p>

      <div className="cards">
        <button className="card" onClick={() => navigate("/mapa")}>
          <p className="card-subtitle">Mapa</p>
          <p className="card-text">Mapa dos postos de vacinação</p>
        </button>

        <button className="card" onClick={() => navigate("/qrcode-gen")}>
          <p className="card-subtitle">Gerar meu QR-Code</p>
          <p className="card-text">Validar vacinação por QR Code</p>
        </button>

        <button className="card" onClick={() => navigate("/ranking")}>
          <p className="card-subtitle">Ranking</p>
          <p className="card-text">Ranking dos bairros mais vacinados</p>
        </button>

        <button className="card" onClick={() => navigate("/vacinas-disponiveis")}>
          <p className="card-subtitle">Histórico de Vacinas</p>
          <p className="card-text">Veja o registro de vacinas que você já tomou</p>
        </button>
      </div>
    </>
  );
}

export default Menu;