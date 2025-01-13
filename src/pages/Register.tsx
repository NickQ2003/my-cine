import React from "react";

const Register: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Registro</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Ingresa tu correo"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Crea una contraseña"
          />
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Repita su contraseña 
          </label>
          <input
            type="password"
            id="password"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Crea una contraseña"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
