import QRCode from "react-qr-code";
import NavBar from "../components/navbar";

function Gerar({ valor }) {
  const valorParaQR = valor || 'Validado com sucesso! \nVocê ganhou 250 Capibas.'; 
  
  
  return (
    <>
      <NavBar />
      <QRCode
        value={valorParaQR} 
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "50%" }}
      />
      <h2>Apresente esse QR-Code para validar sua vacinação e receber as Capibas</h2>      
    </>
  )
}
export default Gerar;
