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
      <img src='https://cdn-icons-png.flaticon.com/512/25/25694.png' height='50' width='50'></img>
        <div className='top-top-div'><h2>QR Code</h2></div>
        <div className='bigger-div'><strong>Digite o link para gerar um QR Code</strong>
        <center><div className='build-qr'><b>Ex.: https://exemplo.com</b></div></center></div>
        <center><button className='other-top-div' onClick={Acessar}>
          <b>Gerar QR Code &nbsp;<img width='20' height='20' src='https://cdn-icons-png.freepik.com/512/20/20592.png'>
        </img></b></button></center>
    </>
  )
}
export default Gerar