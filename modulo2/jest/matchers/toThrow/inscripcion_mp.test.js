const { validarNivel, validarIdioma, calcularCostoClase } = require('./inscripcion_mp');

test('nivel menor a 1 lanza algún error', () => {
  expect(() => validarNivel(0)).toThrow();
});

test('nivel mayor a 6 lanza RangeError con el mensaje correcto', () => {
  expect(() => validarNivel(7)).toThrow('El nivel debe estar entre 1 y 6');
});

test('nivel como string lanza TypeError', () => {
  expect(() => validarNivel('dos')).toThrow(TypeError);
});

test('nivel fuera de rango lanza RangeError', () => {
  expect(() => validarNivel(-1)).toThrow(RangeError);
  expect(() => validarNivel(10)).toThrow(RangeError);
});

test('idioma vacío lanza error que menciona "vacío"', () => {
  expect(() => validarIdioma('')).toThrow(/vacío/);
});

test('idioma de 2 caracteres lanza error de longitud', () => {
  expect(() => validarIdioma('id')).toThrow('al menos 3 caracteres');
});

test('nivel válido no lanza error', () => {
  expect(() => validarNivel(1)).not.toThrow();
  expect(() => validarNivel(3)).not.toThrow();
  expect(() => validarNivel(6)).not.toThrow();
});

test('idioma válido no lanza error', () => {
  expect(() => validarIdioma('Ingles')).not.toThrow();
});

test('calcular costo con cero horas lanza error', () => {
  expect(() => calcularCostoClase(20, 0)).toThrow('Las horas no pueden ser cero');
});

test('calcular costo con valores válidos no lanza error', () => {
  expect(() => calcularCostoClase(20, 3)).not.toThrow();
  expect(calcularCostoClase(20, 3)).toBe(60);
});