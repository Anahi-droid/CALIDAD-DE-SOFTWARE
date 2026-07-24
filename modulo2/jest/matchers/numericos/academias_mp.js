function calcularPromedioCalificaciones(calificaciones) {
  if (calificaciones.length === 0) return 0;
  const suma = calificaciones.reduce((acc, c) => acc + c, 0);
  return suma / calificaciones.length;
}

function aplicarDescuentoCurso(precioBase, porcentajeDescuento) {
  return precioBase * (1 - porcentajeDescuento / 100);
}

function calificacionMaxima(calificaciones) {
  return Math.max(...calificaciones);
}

function calificacionMinima(calificaciones) {
  return Math.min(...calificaciones);
}

module.exports = { calcularPromedioCalificaciones, aplicarDescuentoCurso, calificacionMaxima, calificacionMinima };