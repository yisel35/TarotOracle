// src/components/ResultsDisplay.js
import React from 'react';
import Card from './Card';

const ResultsDisplay = ({ sign, results }) => {
  return (
    <div className="results-display">
      <h2>¡Tu Predicción Personal!</h2>
      <p className="zodiac-sign-result">Tu Signo Zodiacal es: {sign}</p>
      
      <div className="tarot-spread-container">
        <Card title="Consejo de Vida" card={results.vida} />
        <Card title="Consejo de Amor" card={results.love} />
        <Card title="Consejo Laboral/Económico" card={results.work} />
      </div>
    </div>
  );
};

export default ResultsDisplay;