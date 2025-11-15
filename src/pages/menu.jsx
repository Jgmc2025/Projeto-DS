import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import "../css/menu.css"

function Menu() {
    const navigate = useNavigate();
    function Acessar() {
    navigate('/login'); 
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
        <div class="card">
          <p class="card-subtitle">Mapa</p>
          <p className="card-text">Mapa dos postos de vacinação</p>
        </div>
        <div class="card">
          <p class="card-subtitle">QR-Code</p>
          <p className="card-text">Valide sua vacinação e ganhe capibas</p>
        </div>
        <div class="card">
          <p class="card-subtitle">Ranking</p>
          <p className="card-text">Ranking dos bairros mais vacinados</p>
        </div>
      </div>
    </>
  );
}
export default Menu