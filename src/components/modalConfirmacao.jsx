import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '30px',
  zIndex: 1000,
  borderRadius: '15px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  border: '1px solid #a4d7a7'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
  backdropFilter: 'blur(3px)'
}

export default function ModalConfirmacao ({ open, children, onClose }) {
    if (!open) return null;

    return ReactDom.createPortal (
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        {children}
        <button 
          className="entrar-btn" 
          style={{ width: "100%", marginTop: "10px", backgroundColor: "#eee", color: "#333" }} 
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </>,
    document.getElementById('portal')
  )
}