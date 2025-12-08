import QRCode from "react-qr-code";
import NavBar from "../components/navbar";
import ModalConfirmacao from "../components/modalConfirmacao";
import { useState } from "react";

function Gerar({ valor }) {
  const valorParaQR = valor || 'Validado com sucesso! \nVocê ganhou 250 Capibas.'; 
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavBar />
      <QRCode
        value={valorParaQR} 
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      />
      <button onClick={() => setIsOpen(true)}>Abrir</button>
      <ModalConfirmacao open={isOpen} onClose = {() => setIsOpen(false)}>
        <div>
          <h2>Validar Vacina</h2>
          <h3>Usuário</h3>
          <form>

          </form>
        </div>
      </ModalConfirmacao>
    </>
  )
}
export default Gerar;