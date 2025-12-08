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
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      />
    </>
  )
}
export default Gerar;