import React, { useState } from 'react';
import BirthdayInput from './components/BirthdayInput.jsx';
import ResultsDisplay from './components/ResultsDisplay.jsx'; 
import { calculateZodiacSign } from './utils/zodiacLogic';
import { tarotCards } from './utils/tarotData';

// ... el resto del código (handleCalculate, getThreeUniqueCards, etc.)
function App() {
  const [sign, setSign] = useState(null);
  const [results, setResults] = useState(null);

  // Función para seleccionar 3 cartas diferentes al azar
  const getThreeUniqueCards = () => {
    const cards = [...tarotCards]; // Copia de la baraja
    const selectedCards = [];
    const usedIndices = new Set();

    if (cards.length < 3) {
      console.error("Error: No hay suficientes cartas para tirar. ¡Añade más a tarotData.js!");
      return null;
    }

    // El bucle garantiza que se seleccionen 3 cartas sin repetición
    while (selectedCards.length < 3) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        selectedCards.push(cards[randomIndex]);
      }
    }

    return {
      vida: selectedCards[0],
      love: selectedCards[1],
      work: selectedCards[2],
    };
  };

  const handleCalculate = (dateString) => {
    // La fecha viene como 'YYYY-MM-DD'
    const [year, month, day] = dateString.split('-').map(Number);

    // 1. Calcula el Signo
    const calculatedSign = calculateZodiacSign(month, day);
    setSign(calculatedSign);

    // 2. Tira las 3 Cartas
    const threeCards = getThreeUniqueCards();
    setResults(threeCards);
  };

  return (
    <div className="app-container">
      <h1>Horóscopo y Oráculo Personal 🔮</h1>
      
      <BirthdayInput onCalculate={handleCalculate} />

      {/* Renderizado Condicional: solo muestra si hay resultados */}
      {sign && results && (
        <ResultsDisplay sign={sign} results={results} />
      )}
    </div>
  );
}

export default App;