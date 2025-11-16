import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import "../css/menu.css"

function Menu() {
    const navigate = useNavigate();
    const location = useLocation();
    const tipoUsuario = location.state?.tipoUsuario;
    function Mapa() {
    navigate('/mapa'); 
  }
    function Ranking() {
    navigate('/login'); 
  }
  function Qrcode() {
    if (tipoUsuario === "comum") {
      navigate('/qrcode-scan'); 
    } else {
      navigate('/qrcode-gen');
    }
  }
  return (
    <>
      {/*Tela de menu*/}
      <div className="area-logo">
        <img src={logo} width="125" height="125" />
        <h1>Capivac</h1>
      </div>
      <p className="subtitle">
        Sistema de incentivo de vacinação no Recife
        <br />
        Simples, rápido e seguro
      </p>
      <div className="cards">
        <button class="card" onClick={Mapa}>
          <p class="card-subtitle">Mapa</p>
          <p className="card-text">Mapa dos postos de vacinação</p>
        </button>
        <button class="card" onClick={Qrcode}>
          <p class="card-subtitle">QR-Code</p>
          <p className="card-text">Valide sua vacinação e ganhe capibas</p>
        </button>
        <button class="card" onClick={Ranking}>
          <p class="card-subtitle">Ranking</p>
          <p className="card-text">Ranking dos bairros mais vacinados</p>
        </button>
      </div>
    </>
  );
}
export default Menu