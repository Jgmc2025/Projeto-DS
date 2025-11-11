import { useNavigate } from 'react-router-dom';
import logo from './logo.png';

function Inicial() {
    const navigate = useNavigate();
    function Acessar() {
    navigate('/login'); 
  }
  return (
    <>
      {/*Tela inicial*/}
        <div className='fade-test'>
        <h1><img src={logo} width='125' height='125' className='one-image'>
        </img>Capivac</h1></div>
        <p className="read-the-docs">
          <strong>Sistema de gerenciamento de vacinação do Recife
          <br></br>Simples, rápido e seguro</strong></p>
        <center><button class='buttom-div' onClick={Acessar}><b>Acessar Plataforma</b></button>
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
}
export default Inicial


