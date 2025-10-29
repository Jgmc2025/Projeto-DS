import { useState } from 'react';
import './App.css'
import './Other.css'
import './qrcode.css'
import './local.css'
import logo from './logo.png';
function App() {
  const [isok, setx] = useState(true)
  const [other, sety] = useState(true)
  const [side, setz] = useState(true)
  const [map, seth] = useState(true)
  if (isok)
  return (
    <>
        <div className='fade-test'>
        <h1><img src={logo} width='125' height='125' className='one-image'>
        </img>Capivac</h1></div>
        <p className="read-the-docs">
          <strong>Sistema de gerenciamento de vacinação do Recife
          <br></br>Simples, rápido e seguro</strong></p>
        <center><button class='buttom-div' onClick={() => setx(false)}><b>Acessar Plataforma</b></button>
        <div class='about'><b>Saiba mais</b></div></center>
        <div class="position-">
        <p className='text-test'><img src="https://cdn-icons-png.flaticon.com/512/102/102649.png" width="30" height="30">
        </img><b>&nbsp;Seguro</b><br></br>Seus dados protegidos com as melhores práticas de segurança</p>
        </div><div class="position-">
        <p className='text-test'><img src="https://static.thenounproject.com/png/1286514-200.png" width="30" height="30">
        </img><b>Rápido</b><br></br>Acesso instantâneo aos serviços que você precisa</p>
        </div><div class="position-">
        <p className='text-test'><img src="https://icons.veryicon.com/png/o/miscellaneous/8atour/people-23.png" width="30" height="30">
        </img><b>&nbsp;Acessível</b><br></br>Interface intuitiva e aberta a todos os cidadãos</p></div>
    </>
  )
  if (!isok && other)
  return (
    <>
        <div className='other-fade'>
        <h1><img src={logo} width='125' height='125' className='other-image'>
        </img>Capivac</h1></div><p className='text-top'>
        <strong>Acesse sua conta</strong></p>
        <div className='other-div'><p>
        <img src='https://www.svgrepo.com/show/24584/info-icon.svg' width="20" height="20">
        </img>&nbsp;&nbsp;&nbsp;Use seu CPF e senha do Conecta Recife para acessar o sistema</p></div>
        <div className='another-div'><h2 className='login'>Login</h2><h3>CPF</h3>
        <div className='password'>000.000.000-00</div><h3>Senha</h3>
        <div className='password'>Digite sua senha</div>
        <button class='join' onClick={() => sety(false)}>Entrar</button></div>
    </>
  )
  if (!isok && !other && side)
  return(
    <>
        <div className='top-top-div'><h2>&nbsp;&nbsp;&nbsp;&nbsp;QR Code</h2></div>
        <button className='other-top-div' onClick={() => setz(false)}><div className='inside-top-div'><b>Ler QR Code</b></div></button>
        <div className='bigger-div'><strong>Clique no botão abaixo para ativar a câmera e escanear um QR Code</strong>
        <button className='inside-bigger-div' onClick={() => seth(false) & setz(false)}><strong>Ativar câmera</strong></button></div>
    </>
  )
  if (!isok && !other && !side && map)
  return(
    <>
        <div className='top-top-div'><h2>&nbsp;&nbsp;&nbsp;&nbsp;QR Code</h2></div>
        <button className='other-top-div' onClick={() => setz(true)}><div className='inside-other-div'><b>Gerar QR Code</b></div></button>
        <div className='bigger-div'><strong>Digite o link para gerar um QR Code</strong></div>
        <div className='build-qr'><b>Ex.: https://exemplo.com</b></div>
    </>
  )
  if (!isok && !other && !side && !map)
  return(
    <>
        <div className='local-back'><img src='https://cdn-icons-png.flaticon.com/512/5192/5192571.png' width='100' height='100'>
        </img><h2><strong>Mapa de locais de vacinação</strong></h2><h3>Encontre postos de vacinação perto de você</h3>
        </div><div className='bottom-div'><h2>&nbsp;&nbsp;&nbsp;&nbsp;Campanhas ativas</h2>
        <div className='inside-bottom-div'><p><img src='https://cdn-icons-png.flaticon.com/512/6093/6093180.png' width='30' height='30'></img>
        <b>Campanha da Gripe<br></br></b>
        Proteja-se contra a gripe</p></div>
        <div className='inside-bottom-div'><p>
          <img src='https://cdn-icons-png.flaticon.com/512/4468/4468768.png' width='30' height='30'>
          </img><b>Campanha da Poliomielite<br></br></b>
        Vacine as crianças menores de 5 anos de idade</p></div></div>
        <img src='https://icons.veryicon.com/png/o/commerce-shopping/poly-budget-icon-library/home-202.png' width='50' height='50'>
        </img><p><b>Início</b></p>
        <img src='https://cdn-icons-png.flaticon.com/512/808/808999.png' width='50' height='50'></img><p><b>Vacinas</b></p>
        <img src='https://cdn-icons-png.flaticon.com/512/263/263056.png' width='50' height='50'></img><p><b>Ranking</b></p>
    </>
  )
}
export default App


