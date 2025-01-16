import React, { useState, useEffect } from "react";
import Register from "../pages/Register";
import ModalInfo from "../pages/modalInfo";
interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false); 

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRegisterModalOpen(false);
  };
  const handleOutsideClick = (event: MouseEvent) => {
    const modalElement = document.querySelector(".modal");
    if (
      modalElement &&
      !modalElement.contains(event.target as Node) &&
      (isModalOpen || isRegisterModalOpen)
    ) {
      closeModal();
    }
  };
  useEffect(() => {
    if (isModalOpen || isRegisterModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen, isRegisterModalOpen]);

  const handleRegisterClick = () => {
    setIsModalOpen(false); 
    setRegisterModalOpen(true); 
  };

  return (
    <div>
      <div id="root">
        <div className="listado-pelis">
          <div className="card">
            <figure className="margen">
              <img
                alt={title}
                src={"https://image.tmdb.org/t/p/w200/" + image}
                className="card-img"
              />
            </figure>
            <div className="enter-card">
              <h4 className="text-card">{title}</h4>
              <p className="parrafo">{truncateText(description, 100)}</p>
              <div className="informativo">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  onClick={() => setIsModalOpen(true)}
                >
                  Saber Más
                </button>
              </div>
            </div>
          </div>

          {isModalOpen && (
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
              <ModalInfo
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                handleRegisterClick={handleRegisterClick}
                title={title}
                description={description}
              />
            </div>
          )}
          {isRegisterModalOpen && (
              <div onClick={(e) => e.stopPropagation()}>
                <Register />
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
