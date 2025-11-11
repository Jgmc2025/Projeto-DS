import { useNavigate } from 'react-router-dom';
import logo from './logo.png';

function Login() {
    const navigate = useNavigate();
    function Acessar() {
    navigate('/qrcode-scan'); 
  }
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
        <button class='join' onClick={Acessar}>Entrar</button></div>
    </>
  )
}
export default Login


