const { convertirMinutosHoras, convertirCelsiusFahrenheit, convertirMetrosPies, esMayorEdad, obtenerTurnoClase } = require('./conversor_mp');

test('convertir 120 minutos devuelve 2 horas', () => {
  expect(convertirMinutosHoras(120)).toBe(2);
});

test('convertir 0 grados celsius devuelve 32 fahrenheit', () => {
  expect(convertirCelsiusFahrenheit(0)).toBe(32);
});

test('convertir 1 metro devuelve 3.28084 pies', () => {
  expect(convertirMetrosPies(1)).toBeCloseTo(3.28084, 5);
});

test('esMayorEdad devuelve true para mayores o igual a 18', () => {
  expect(esMayorEdad(18)).toBe(true);
  expect(esMayorEdad(25)).toBe(true);
});

test('esMayorEdad devuelve false para menores de 18', () => {
  expect(esMayorEdad(15)).toBe(false);
});

test('obtenerTurnoClase a las 9h devuelve Turno Mañana', () => {
  expect(obtenerTurnoClase(9)).toBe('Turno Mañana');
});

test('obtenerTurnoClase a las 15h devuelve Turno Tarde', () => {
  expect(obtenerTurnoClase(15)).toBe('Turno Tarde');
});

test('obtenerTurnoClase a las 20h devuelve Turno Noche', () => {
  expect(obtenerTurnoClase(20)).toBe('Turno Noche');
});