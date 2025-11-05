// src/components/Card.js
import React from 'react';

const Card = ({ title, card }) => {
  
  const meaningKey = title.toLowerCase().includes('vida') ? 'general' : 
                     title.toLowerCase().includes('amor') ? 'love' : 'work';
                     
  const consejo = card.meaning[meaningKey] || "Significado no encontrado para esta categoría.";

  return (
    <div className="tarot-card">
      <h4>{title}</h4>
      <p className="card-name">Carta: **{card.name}**</p>
      
      <p className="card-advice">
        **Tu Consejo:** {consejo}
      </p>
    </div>
  );
};

export default Card;