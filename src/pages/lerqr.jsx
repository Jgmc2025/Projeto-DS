import { useNavigate } from 'react-router-dom';
import './qrcode.css'

function Ler() {
  const navigate = useNavigate();
  function Acessar1() {
    navigate('/qrcode-gen'); 
  }
  function Acessar2() {
    navigate('/mapa'); 
  }
  return(
    <>
      {/*Tela de ler QR Code*/}
      <img src='https://cdn-icons-png.flaticon.com/512/25/25694.png' height='50' width='50'></img>
        <div className='top-top-div'><h2>QR Code</h2></div>
        <div className='bigger-div'><strong>Clique no botão abaixo para ativar a câmera e escanear um QR Code</strong>
        <button className='inside-bigger-div' onClick={Acessar2}><strong>Ativar câmera</strong></button></div>
        <center><button className='other-top-div' onClick={Acessar1}>
          <b>Ler QR Code &nbsp;<img width='20' height='20' src='https://cdn-icons-png.freepik.com/512/20/20592.png'>
        </img></b></button></center>
    </>
  )
}
export default Ler