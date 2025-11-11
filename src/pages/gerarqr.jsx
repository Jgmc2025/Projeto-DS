import { useNavigate } from 'react-router-dom';
import './qrcode.css'

function Gerar() {
    const navigate = useNavigate();
    function Acessar() {
    navigate('/qrcode-scan'); 
  }
  return(
    <>
      {/*Tela que gera QR Code*/}
        <div className='top-top-div'><h2>QR Code</h2></div>
        <button className='other-top-div' onClick={Acessar}><div className='inside-other-div'><b>Gerar QR Code</b></div></button>
        <div className='bigger-div'><strong>Digite o link para gerar um QR Code</strong>
        <div className='build-qr'><b>Ex.: https://exemplo.com</b></div></div>
    </>
  )
}
export default Gerar