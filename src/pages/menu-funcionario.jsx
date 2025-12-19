import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";
import "../css/menu.css";

function MenuFuncionario() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  // Busca os dados do funcionário ao montar a tela
  useEffect(() => {
    const buscarDadosUsuario = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users", {
          withCredentials: true 
        });
        setUsuario(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do funcionário:", error);
        if (error.response && error.response.status === 401) {
          navigate("/");
        }
      }
    };
    buscarDadosUsuario();
  }, [navigate]);

  // Função de Logout (POST para limpar cookie HttpOnly)
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/logout", {}, { withCredentials: true });
      alert("Deslogado com sucesso!");
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
      
      {/* Barra de Informações (Modal Horizontal) */}
      <div className="barra-info-usuario">
        {usuario ? (
          <div className="info-conteudo">
            <span className="texto-boas-vindas">
              Bem-vindo, <strong>{usuario.nome ? usuario.nome.split(' ')[0] : "Funcionário"}</strong>
            </span>
            
            <div className="dados-usuarios">
              <span className="info-item"><strong>CPF:</strong> {usuario.cpf}</span>            
              <span className="info-item"><strong>Bairro:</strong> {usuario.bairro}</span>
            </div>
          </div>
        ) : (
          <p className="texto-carregando">Carregando perfil administrativo...</p>
        )}
      </div>

      <p className="subtitulo">
        Painel Administrativo - Incentivo de Vacinação
        <br />
        Gestão de registros e validações
      </p>

      <div className="cards">
        {/* Card exclusivo do Funcionário: Ler QR-Code */}

        <button className="card" onClick={() => navigate("/qrcode-scan")}>
          <p className="card-subtitulo">Validar vacina</p>
          <p className="card-texto">Escaneie o QR-Code do usuário para validar</p>
        </button>

        <button className="card" onClick={() => navigate("/qrcode-gen")}>
          <p className="card-subtitulo">Gerar meu QR-Code</p>
          <p className="card-texto">Validar vacinação por QR Code</p>
        </button>

        <button className="card" onClick={() => navigate("/mapa")}>
          <p className="card-subtitulo">Mapa</p>
          <p className="card-texto">Mapa dos postos de vacinação</p>
        </button>
      
        <button className="card" onClick={() => navigate("/ranking")}>
          <p className="card-subtitulo">Ranking</p>
          <p className="card-texto">Ranking dos bairros mais vacinados</p>
        </button>
      </div>
    </>
  );
}

export default MenuFuncionario;