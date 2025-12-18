import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";
import "../css/menu.css";

function Menu() {
  const navigate = useNavigate();
  
  // Estado para armazenar o objeto do usuário
  const [usuario, setUsuario] = useState(null);

  // Busca os dados do usuário ao montar o componente
  useEffect(() => {
    const buscarDadosUsuario = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users", {
          withCredentials: true // Obrigatório para enviar o cookie JWT HttpOnly
        });
        
        setUsuario(response.data);
        console.log("Dados do usuário carregados:", response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        // Opcional: redirecionar para login se der erro 401
        if (error.response && error.response.status === 401) {
          navigate("/");
        }
      }
    };

    buscarDadosUsuario();
  }, [navigate]);

  // Funções de Navegação
  function EditarDados() {
    navigate("/atualizar-dados");
  }

  function Mapa() {
    navigate("/mapa");
  }

  function Ranking() {
    navigate("/ranking");
  }

  function Vacinas() {
    navigate("/vacinas-disponiveis");
  }

  function Gen() {
    navigate("/qrcode-gen");
  }

  return (
    <>
      {/* Cabeçalho */}
      <div className="area-logo">
        <img src={logo} width="125" height="125" alt="Capivac Logo" />
        <h1>Capivac</h1>
      </div>

      {/* Barra de Informações do Usuário (Estilo Modal Horizontal) */}
      <div className="user-info-bar">
        {usuario ? (
          <div className="info-content">
            <span className="welcome-text">
              Bem-vindo, <strong>{usuario.nome ? usuario.nome.split(' ')[0] : "Usuário"}</strong>
            </span>
            
            <div className="divider"></div>
            
            <span className="info-item"><strong>CPF:</strong> {usuario.cpf}</span>
            
            <div className="divider"></div>
            
            <span className="info-item"><strong>Bairro:</strong> {usuario.bairro}</span>
            
            
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

      {/* Grade de Funcionalidades */}
      <div className="cards">
        <button className="card" onClick={Mapa}>
          <p className="card-subtitle">Mapa</p>
          <p className="card-text">Mapa dos postos de vacinação</p>
        </button>

        <button className="card" onClick={Gen}>
          <p className="card-subtitle">Criar QR-Code</p>
          <p className="card-text">Valide sua vacinação e ganhe Capibas</p>
        </button>

        <button className="card" onClick={Ranking}>
          <p className="card-subtitle">Ranking</p>
          <p className="card-text">Ranking dos bairros mais vacinados</p>
        </button>

        <button className="card" onClick={Vacinas}>
          <p className="card-subtitle">Histórico de Vacinas</p>
          <p className="card-text">
            Veja o registro de vacinas que você já tomou
          </p>
        </button>
      </div>
    </>
  );
}

export default Menu;