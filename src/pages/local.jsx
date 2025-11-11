import { useNavigate } from 'react-router-dom';
import './local.css'

function Local() {
    const navigate = useNavigate();
    function Acessar() {
    navigate('/vacinas'); 
  }
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
        <button className='vacinas-div' onClick={Acessar}><p>
        <img src='https://cdn-icons-png.flaticon.com/512/808/808999.png' width='50' height='50'></img><b>Vacinas</b></p></button>
        <div className='ranking-div'><p>
        <img src='https://cdn-icons-png.flaticon.com/512/263/263056.png' width='50' height='50'></img><b>Ranking</b></p></div>
        <div className='inicio-div'><p>
        <img src='https://icons.veryicon.com/png/o/commerce-shopping/poly-budget-icon-library/home-202.png' width='50' height='50'>
        </img><br></br><b>Início</b></p></div>
    </>
  )
}
export default Local