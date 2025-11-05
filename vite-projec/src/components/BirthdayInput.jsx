// src/components/BirthdayInput.jsx
import React, { useState } from 'react';

const BirthdayInput = ({ onCalculate }) => {
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date) {
      onCalculate(date);
    } else {
      alert("Por favor, introduce tu fecha de nacimiento.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="birthday-form">
      <label htmlFor="birthdate">Introduce tu Fecha de Nacimiento:</label>
      <input
        id="birthdate"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">
        Calcular Signo y Tirar Cartas
      </button>
    </form>
  );
};

export default BirthdayInput;