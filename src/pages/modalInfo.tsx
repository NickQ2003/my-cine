import React from 'react';
import { FaHeart } from 'react-icons/fa';

interface ModalInfoProps {
  isModalOpen: boolean;
  closeModal: () => void;
  handleRegisterClick: () => void;
  title: string;
  description: string;
}

const ModalInfo: React.FC<ModalInfoProps> = ({
  isModalOpen,
  closeModal,
  handleRegisterClick,
  title,
  description,
}) => {
  if (!isModalOpen) return null;

  return (
    <div className="modal-container" onClick={closeModal}>
      <div
        className="modalR"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closeModal} className="close-button">
          &times;
        </button>
        <h2 className="h2">Detalles de {title}</h2>
        <p className="parrafo-modal">{description}</p>
        <div className="botones-modal">
          <button onClick={closeModal} className="btn-mod">
            Cerrar
          </button>
          <button onClick={handleRegisterClick} className="btn-mod">
            <FaHeart className="mr-2" />
            Me gusta
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
