import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <>
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
