import React, { useState } from "react";
import CardList from "./components/CardList";
import Register from "./pages/Register";
import Login from "./pages/login";

const App: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  return (
    <div>
      <header className="m-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Most Popular</h1>
        <div>
          <button
            onClick={() => setLoginModalOpen(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded mx-2"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => setRegisterModalOpen(true)}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Registrarse
          </button>
        </div>
      </header>
      <main className="bg-cyan-300">
        <CardList />
      </main>

      {/* Modal Inicio de Sesión */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <Login />
            <button
              onClick={() => setLoginModalOpen(false)}
              className="absolute top-4 right-4 text-red-500"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal Registro */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <Register />
            <button
              onClick={() => setRegisterModalOpen(false)}
              className="absolute top-4 right-4 text-red-500"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
