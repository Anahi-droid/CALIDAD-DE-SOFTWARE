function convertirMinutosHoras(minutos) {
  return minutos / 60;
}

function convertirCelsiusFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function convertirMetrosPies(metros) {
  return metros * 3.28084;
}

function esMayorEdad(edad) {
  return edad >= 18;
}

function obtenerTurnoClase(hora) {
  if (hora < 12) return 'Turno Mañana';
  if (hora < 18) return 'Turno Tarde';
  return 'Turno Noche';
}

module.exports = { 
  convertirMinutosHoras, 
  convertirCelsiusFahrenheit, 
  convertirMetrosPies, 
  esMayorEdad, 
  obtenerTurnoClase 
};