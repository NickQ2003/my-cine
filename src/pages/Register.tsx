import React, { useState } from "react";

const Register: React.FC = () => {
  // Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return null; // Si el modal está cerrado, no renderizamos nada
  }

  return (
    <div className="modal-container">
      <div className="modalR">
        {/* Botón de cierre con onClick para cerrar el modal */}
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <div className="header">
          <img src="./src/image/Logo.png" alt="Logo" />
        </div>
        <form className="form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="space-holder"
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="space-holder"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="space-holder"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="space-holder"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone-number" className="form-label">
              Ph. Number
            </label>
            <input
              type="tel"
              id="phone-number"
              className="space-holder"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="space-holder"
              placeholder="Create a password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="space-holder"
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
