import React, { useState } from 'react';
import BirthdayInput from './components/BirthdayInput.jsx';
import ResultsDisplay from './components/ResultsDisplay.jsx'; 
import WelcomeMessage from './components/WelcomeMessage.jsx'; // 👈 Agregado
import { calculateZodiacSign } from './utils/zodiacLogic';
import { tarotCards } from './utils/tarotData';


function App() {
  const [sign, setSign] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // 👈 Nuevo estado para la carga

  // Función para seleccionar 3 cartas diferentes al azar
  const getThreeUniqueCards = () => {
    const cards = [...tarotCards]; 
    const selectedCards = [];
    const usedIndices = new Set();

    if (cards.length < 3) {
      console.error("Error: No hay suficientes cartas para tirar. ¡Añade más a tarotData.js!");
      return null;
    }

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
    // Activamos la carga inmediatamente
    setIsLoading(true); 

    // Simulamos un pequeño retraso para que se vea el estado de carga
    setTimeout(() => {
      const [year, month, day] = dateString.split('-').map(Number);

      // 1. Calcula el Signo
      const calculatedSign = calculateZodiacSign(month, day);
      setSign(calculatedSign);

      // 2. Tira las 3 Cartas
      const threeCards = getThreeUniqueCards();
      setResults(threeCards);

      // Desactivamos la carga
      setIsLoading(false);
    }, 1500); // 1.5 segundos de "pensamiento" del oráculo
  };

  return (
    <div className="app-container">
      <h1>Horóscopo y Oráculo Personal 🔮</h1>
      
      <BirthdayInput 
        onCalculate={handleCalculate} 
        isLoading={isLoading} // 👈 Pasamos el estado de carga al input
      />

      {/* Renderizado Condicional: Muestra los resultados O el mensaje de bienvenida */}
      {sign && results ? (
        <ResultsDisplay sign={sign} results={results} />
      ) : (
        // Se muestra el mensaje si no hay resultados y NO estamos cargando
        !isLoading && <WelcomeMessage /> 
      )}
      
      {/* Opcional: Indicador de carga simple */}
      {isLoading && (
        <div className="loading-message">
          <h2>Consultando a los Arcanos...</h2>
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default App;