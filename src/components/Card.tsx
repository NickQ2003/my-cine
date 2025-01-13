import React, { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);


  // Función para limitar la longitud del texto
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="table-cell">
      <ul className="card">
        <figure>
          <img
            alt={title}
            src={"https://image.tmdb.org/t/p/w200/" + image}
            className="h-10 rounded-lg w-full object-cover"
          />
        </figure>
        <li className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="size-10 text-gray-600 text-sm">
            {truncateText(description, 100)}
          </p>
          <div className="card-action">
            <button
              className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
              Saber Más
            </button>
            <button className="btn btn-primary" onClick={() => setRegisterModalOpen(true)}>
              Registrate aqui !
            </button>
          </div>
        </li>
      </ul>

      {/* Modal */}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
