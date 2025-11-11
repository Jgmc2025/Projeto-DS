import { useState } from 'react';
import './App.css'
import './Other.css'
import './qrcode.css'
import './local.css'
import './vacinas.css'
import './capibas.css'
import logo from './logo.png';
function App() {
  const [isok, setx] = useState(true)
  const [other, sety] = useState(true)
  const [side, setz] = useState(true)
  const [map1, seth] = useState(true)
  const [vacs, setv] = useState(true)
  const [cap, setc] = useState(true)
  if (isok)
  return (
    <>
      {/*Tela inicial*/}
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
      {/*Tela de login*/}
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
      {/*Tela de ler QR Code*/}
        <div className='top-top-div'><h2>&nbsp;&nbsp;&nbsp;&nbsp;QR Code</h2></div>
        <button className='other-top-div' onClick={() => setz(false)}><div className='inside-top-div'><b>Ler QR Code</b></div></button>
        <div className='bigger-div'><strong>Clique no botão abaixo para ativar a câmera e escanear um QR Code</strong>
        <button className='inside-bigger-div' onClick={() => seth(false) & setz(false)}><strong>Ativar câmera</strong></button></div>
    </>
  )
  if (!isok && !other && !side && map1)
  return(
    <>
      {/*Tela que gera QR Code*/}
        <div className='top-top-div'><h2>&nbsp;&nbsp;&nbsp;&nbsp;QR Code</h2></div>
        <button className='other-top-div' onClick={() => setz(true)}><div className='inside-other-div'><b>Gerar QR Code</b></div></button>
        <div className='bigger-div'><strong>Digite o link para gerar um QR Code</strong></div>
        <div className='build-qr'><b>Ex.: https://exemplo.com</b></div>
    </>
  )
  if (!isok && !other && !side && !map1 && vacs)
  return(
    <>
      {/*Tela do mapa*/}
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
        <button className='vacinas-div' onClick={() => setv(false)}><p>
        <img src='https://cdn-icons-png.flaticon.com/512/808/808999.png' width='50' height='50'></img><b>Vacinas</b></p></button>
        <div className='ranking-div'><p>
        <img src='https://cdn-icons-png.flaticon.com/512/263/263056.png' width='50' height='50'></img><b>Ranking</b></p></div>
        <div className='inicio-div'><p>
        <img src='https://icons.veryicon.com/png/o/commerce-shopping/poly-budget-icon-library/home-202.png' width='50' height='50'>
        </img><br></br><b>Início</b></p></div>
    </>
  )
  if (!isok && !other && !side && !map1 && !vacs && cap)
  return(
    <>
      {/*Tela de vacinas*/}
        <div className='top-top-div'><h2>&nbsp;&nbsp;&nbsp;&nbsp;<img src='https://cdn-icons-png.flaticon.com/512/195/195848.png' width='25' height='25'></img>&nbsp;&nbsp;&nbsp;Vacinas Disponíveis</h2></div>
        <div className='msg_telavacina'><h2><img src='https://cdn-icons-png.flaticon.com/512/606/606782.png' width={22}></img>&nbsp;&nbsp;Períodos de Campanhas
        <div className='campanhas-div'>Campanha da Gripe<div className='campanhascolor-div'><strong>Abril - Junho 2025</strong></div><div className='ativa-div'><strong>Ativa</strong></div></div>
        <div className='campanhas-div'>Campanha da Poliomielite
          <div className='campanhascolor-div'><strong>Agosto - Setembro 2025</strong><div className='programadas-div'><strong>Programada</strong></div></div></div>
        Todas as vacinas
        <div className='campanhas-div'>BCG<div className='campanhascolor-div'><strong>Proteção contra tuberculose</strong></div></div>
        <div className='campanhas-div'>Penta (DTP/Hib/Hepatite B)<div className='campanhascolor-div'><strong>Proteção combinada contra 5 doenças</strong></div></div>
        <div className='campanhas-div'>Poliomielite (VIP e VOP)<div className='campanhascolor-div'><strong>Prevenção da paralisia infantil</strong></div></div>
        <button className='botao-capibas-div' onClick={() => setc(false)}><p><b>Tela Capibas</b></p></button>
        </h2></div>
        
        
    </>
  )
  if (!isok && !other && !side && !map1 && !vacs && !cap)
  return(
    <>
    {/*Tela de capibas*/}
    {/*Mensagem e Imagem do Cabeçalho*/}
    <div className='top-top-top-div'><h2>&nbsp;&nbsp;&nbsp;&nbsp;<img src='https://cdn-icons-png.flaticon.com/512/1373/1373452.png' width='25' height='25'></img>&nbsp;&nbsp;&nbsp;Câmbio de Capibas</h2></div>
    
    {/*Mensagem de funcionamento*/}
    <div className='funcionamento-div'><strong>Como funciona?</strong><div className='funcionamento-color-div'>
      <strong>Troque suas vacinas tomadas por moedas Capibas e resgate prêmios!</strong></div></div>

    {/*Mensagem Opções de trocas*/}
    <div className='msg-trocas-div'><h2>Opções de Troca Disponíveis</h2></div>

    {/*Blocos de informações dos pacotes de troca*/}
    {/*PACOTE INICIAL*/}
    <div className='trocas-div'>
      {/*Nome do pacote e preço ao lado*/}
      <div className='titulo-preco-div'>
        <strong>Pacote Inicial</strong>
        <div className='preco-troca-div'>200</div>
      </div>
    {/*Informações do Pacote Incial*/}
    <p>2 vacinas</p>
    <h4>Vacinas Incluídas:</h4>
    <div className='nome-vacina-div'>BCG</div>
    <div className='nome-vacina-div'>Hepatite B</div>
    <div className='botao-troca-div'>Trocar por 200 Capibas</div>
    </div>

    {/*PACOTE INFANTIL*/}
    <div className='trocas-div'>
      {/*Nome do pacote e preço ao lado*/}
      <div className='titulo-preco-div'>
      <strong>Pacote Infantil</strong>
      <div className='preco-troca-div'>350</div>
      </div>
    {/*Informações do Pacote Infantil*/}
    <p>3 vacinas</p>
    <h4>Vacinas Incluídas:</h4>
    <div className='nome-vacina-div'>Penta (DTP/Hib/Hepatite B)</div>
    <div className='nome-vacina-div'>Poliomielite (VIP)</div>
    <div className='nome-vacina-div'>Rotavírus</div>    
    <div className='botao-troca-div'>Trocar por 350 Capibas</div>
    </div>

    {/*PACOTE COMPLETO*/}
    <div className='trocas-div'>
      {/*Nome do pacote e preço ao lado*/}
      <div className='titulo-preco-div'>
      <strong>Pacote Completo</strong>
      <div className='preco-troca-div'>550</div>
      </div>
    {/*Informações do Pacote Completo*/}
    <p>5 vacinas</p>
    <h4>Vacinas Incluídas:</h4>
    <div className='nome-vacina-div'>Tríplice Viral</div>
    <div className='nome-vacina-div'>Tetra Viral</div>
    <div className='nome-vacina-div'>Varicela</div>
    <div className='nome-vacina-div'>Febre Amarela</div>
    <div className='nome-vacina-div'>HPV</div>
    <div className='botao-troca-div'>Trocar por 550 Capibas</div>
    
    </div>
    </>
  )
}
export default App


