import { useNavigate } from 'react-router-dom';
import './vacinas.css'

function Vacinas() {
    const navigate = useNavigate();
    function Acessar() {
    navigate('/capibas'); 
  }
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
        <button className='vacinas-div' onClick={Acessar}><p><b>Capibas</b></p></button>
        </h2></div>
    </>
  )
}
export default Vacinas