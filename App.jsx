import { useState } from 'react';
import './App.css'
import './Other.css'
function App() {
  const [isok, setx] = useState(true)
  if (isok)
  return (
    <>
        <div className='fade-test'>
        <h1>Capivac</h1></div>
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
  if (!isok)
  return (
    <>
        <h1 className='other-fade'>Capivac</h1>
        <p className='text-top'>
          <strong>Acesse sua conta</strong></p>
        <div className='other-div'><p>
        <img src='https://www.svgrepo.com/show/24584/info-icon.svg' width="20" height="20">
        </img>&nbsp;&nbsp;&nbsp;Use seu CPF e senha do Conecta Recife para acessar o sistema</p></div>
        <div className='another-div'><h2 className='login'>Login</h2><h3>CPF</h3>
        <div className='password'>000.000.000-00</div><h3>Senha</h3>
        <div className='password'>Digite sua senha</div>
        <button class='join' onClick={() => setx(true)}>Entrar</button></div>
    </>
  )}
export default App


