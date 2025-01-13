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
    <div className="flex justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm w-full">
        <figure className="w-full">
          <img
            alt={title}
            src={"https://image.tmdb.org/t/p/w200/" + image}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 text-sm mt-2">
            {truncateText(description, 100)}
          </p>
          <div className="flex justify-between mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => setIsModalOpen(true)}
            >
              Saber Más
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              onClick={() => setRegisterModalOpen(true)}
            >
                !registrate!
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Detalles de {title}</h2>
            <p className="mb-4">{description}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
            >
              Cerrar
              </button>
              <button
                onClick={() => setRegisterModalOpen(true)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
              >
                <FaHeart className="mr-2" /> 
                me gusta
              </button>
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
  );
};

export default Card;
