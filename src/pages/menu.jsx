import { useNavigate } from 'react-router-dom';
import logo from './logo.png';

function Menu() {
    const navigate = useNavigate();
    function Acessar() {
    navigate('/login'); 
  }
  return (
    <>
      {/*Tela de menu*/}
        <div className='fade-test'>
        <h1><img src={logo} width='125' height='125' className='one-image'>
        </img>Capivac</h1></div>
        <p className="read-the-docs">
          <strong>Sistema de gerenciamento de vacinação do Recife
          <br></br>Simples, rápido e seguro</strong></p>
        <div class="position-">
        <p className='text-test'><center><b>Mapa</b><br></br>Encontre um ponto de vacinação perto de você</center></p>
        </div><div class="position-">
        <p className='text-test'><center><b>QR-Code</b><br></br>Registre sua vacinação e ganhe capibas</center></p>
        </div><div class="position-">
        <p className='text-test'><center><b>Ranking</b><br></br>Veja em que posição seu bairro se encontra</center></p></div>
    </>
  )
}
export default Menu