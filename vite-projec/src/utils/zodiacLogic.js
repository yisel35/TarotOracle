// src/utils/zodiacLogic.js

export const calculateZodiacSign = (month, day) => {
  // Conversión de mes y día a número
  month = Number(month);
  day = Number(day);

  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Acuario ♒";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Piscis ♓";
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries ♈";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Tauro ♉";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Géminis ♊";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cáncer ♋";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo ♌";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo ♍";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra ♎";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Escorpio ♏";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagitario ♐";
  return "Capricornio ♑"; // 22 de Dic al 19 de Ene
};