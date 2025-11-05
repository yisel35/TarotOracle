// src/components/WelcomeMessage.jsx
import React from 'react';

const WelcomeMessage = () => {
  return (
    <div className="welcome-message">
      <h2>Descubre tu Destino Cósmico</h2>
      <p>
        Introduce tu fecha de nacimiento para conocer tu signo zodiacal y recibir 
        una tirada de tres cartas del Tarot de los Arcanos Mayores. 
      </p>
      <p className="instruction-text">
        **Tu lectura te dará consejos sobre tu Vida, Amor y Finanzas.**
      </p>
      <p>
        ¡El universo espera tu pregunta!
      </p>
    </div>
  );
};

export default WelcomeMessage;