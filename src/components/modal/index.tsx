import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import colorTheme from '@/styles/colors';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
  open?: boolean;
  hideClose?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  onClose, children, width, height, open, hideClose,
}) => { // TODO: hideClose가 true일경우, onClose와 open을 적절히 설정해야됨
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  useEffect(() => {
    const preventGoBack = () => {
      navigate(1);
      onClose();
    };
    window.history.pushState(null, '', location.pathname);
    window.addEventListener('popstate', preventGoBack);

    return () => window.removeEventListener('popstate', preventGoBack);
  }, [onClose, navigate, location]);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer width={width} height={height} onClick={handleModalClick}>
        { !hideClose && <Button onClick={onClose}>&times;</Button> }
        <div>{children}</div>
      </ModalContainer>
    </ModalOverlay>,
    document.getElementById('modal-root') || document.body as HTMLElement,
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div<{ width?: string, height?: string }>`
  position: fixed;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  top: 50%;
  left: 50%;
  padding: 0 20px;
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
