import { FaHeart } from "react-icons/fa";
import React, { useState } from "react";
import Register from "../pages/Register";

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
                <p className="parrafo">
                    {truncateText(description, 100)}
                </p>
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
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="modal">
                    <h2 className="h2">Detalles de {title}</h2>
                    <p className="parrafo-modal">{description}</p>
                    <div className="botones-modal">
                        <button
                        onClick={() => setIsModalOpen(false)}
                        className="btn-mod"
                        >
                        Cerrar
                        </button>
                        <button
                            onClick={() => setRegisterModalOpen(true)}
                            className="btn-mod"
                        >
                            <FaHeart className="mr-2" /> 
                            me gusta
                        </button>
                    </div>
                </div>
                </div>
            )}

            {isRegisterModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-8 w-96 shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Registrarse</h2>
                    <Register />
                    <button
                    onClick={() => setRegisterModalOpen(false)}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
                    >
                    Cerrar
                    </button>
                </div>
                </div>
            )}
            </div>
        </div>    
    </div>
  );
};

export default Card;
