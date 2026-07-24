const { validarCorreoIdioma, encontrarTermino, limpiarNombreCurso } = require('./idiomas_mp');

describe('toMatch matcher en academia de idiomas', () => {
  test('Happy path: validar correos institucionales de idiomas', () => {
    expect('estudiante@idiomas.ec').toMatch(/^[\w.-]+@idiomas\.ec$/i);
    expect(validarCorreoIdioma('profe@idiomas.ec')).toBe(true);
  });

  test('Happy path: encontrar término con regex', () => {
    expect(encontrarTermino('Curso de Ingles Avanzado', 'ingles')).toBe(true);
  });

  test('Sad path: email o patrón inválido', () => {
    expect(() => validarCorreoIdioma(123)).toThrow('email debe ser string');
    expect(() => encontrarTermino('Texto', 123)).toThrow('texto y patrón deben ser strings');
  });

  test('Happy/Sad path: limpiar nombre de curso', () => {
    expect(limpiarNombreCurso('  Ingles   Avanzado  ')).toBe('Ingles Avanzado');
    expect(() => limpiarNombreCurso(null)).toThrow('texto debe ser string');
  });
});