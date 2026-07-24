const { calcularPromedioCalificaciones, aplicarDescuentoCurso, calificacionMaxima, calificacionMinima } = require('./academias_mp');

test('el promedio de calificaciones de inglés [75, 85, 95] es mayor que 80', () => {
  expect(calcularPromedioCalificaciones([75, 85, 95])).toBeGreaterThan(80);
});

test('la calificación máxima en francés [80, 90, 100] es mayor o igual que 100', () => {
  expect(calificacionMaxima([80, 90, 100])).toBeGreaterThanOrEqual(100);
});

test('la calificación mínima en alemán [60, 70, 80] es menor que 70', () => {
  expect(calificacionMinima([60, 70, 80])).toBeLessThan(70);
});

test('el precio del curso con descuento nunca eleva el costo original', () => {
  const precioFinal = aplicarDescuentoCurso(200, 15);
  expect(precioFinal).toBeLessThanOrEqual(200);
});

test('promedio de horas semanales [1.5, 2.5] es cercano a 2.0', () => {
  expect(calcularPromedioCalificaciones([1.5, 2.5])).toBeCloseTo(2.0, 1);
});

test('descuento del 25% sobre un curso de 160 es cercano a 120', () => {
  expect(aplicarDescuentoCurso(160, 25)).toBeCloseTo(120, 2);
});

test('promedio de asistencias con decimales', () => {
  expect(calcularPromedioCalificaciones([0.2, 0.4, 0.4])).toBeCloseTo(0.333, 2);
});