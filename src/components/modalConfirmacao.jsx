import React from 'react'
import ReactDom from 'react-dom'

export default function ModalConfirmacao ({open, children, onClose}) {
    if (!open) return null;

    return ReactDom.createPortal (
    <>
      <div/>
      <div>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}