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
        <div className='top-top-div'><h2>QR Code</h2></div>
        <button className='other-top-div' onClick={Acessar1}><div className='inside-top-div'><b>Ler QR Code</b></div></button>
        <div className='bigger-div'><strong>Clique no botão abaixo para ativar a câmera e escanear um QR Code</strong>
        <button className='inside-bigger-div' onClick={Acessar2}><strong>Ativar câmera</strong></button></div>
    </>
  )
}
export default Ler