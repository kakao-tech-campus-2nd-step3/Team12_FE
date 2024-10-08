import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import colorTheme from '@/styles/colors';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
  open?: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, width, height, open}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  
  useEffect(() => {
    const preventGoBack = () => {
      history.go(1);
      onClose();
    };
    history.pushState(null, "", location.href);
    window.addEventListener("popstate", preventGoBack);
    
    return () => window.removeEventListener("popstate", preventGoBack);
  }, [onClose]);
  return ReactDOM.createPortal(
    <>
      <div className="modal-content">
          <ModalContainer width={width} height={height}>
          <Button onClick={onClose}>&times;</Button>
          <div>{children}</div>
        </ModalContainer>
      </div>
    </>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;

const ModalContainer = styled.div<{ width?: string, height?: string }>`
  position: fixed;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: ${colorTheme.background.main};
`;

const Button = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 5px;
  right: 5px;
  font-size: 24px;
  color: #B2B6BB;
  &:hover {
    color: ${colorTheme.primary.main};
    cursor: pointer;
  }
`;