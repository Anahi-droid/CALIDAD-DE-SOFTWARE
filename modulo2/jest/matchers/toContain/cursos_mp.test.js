const { obtenerCursos, contieneIdioma, agregarEstudiante } = require('./cursos_mp'); 

describe('toContain matcher en academia de idiomas', () => {
  test('Happy path: curso dentro de array', () => {
    const cursos = obtenerCursos();
    expect(cursos).toContain('frances');
  });

  test('Happy path: idioma dentro de texto', () => {
    expect(contieneIdioma('El curso de ingles es increíble', 'ingles')).toBe(true);
  });

  test('Sad path: curso no encontrado o tipo incorrecto', () => {
    const cursos = obtenerCursos();
    expect(cursos).not.toContain('japones');
    expect(() => contieneIdioma(123, 'texto')).toThrow('Ambos argumentos deben ser strings');
  });

  test('Sad path: agregarEstudiante con valores inválidos', () => {
    expect(() => agregarEstudiante({}, 'Ana')).toThrow('lista debe ser un array');
    expect(() => agregarEstudiante([], '')).toThrow('estudiante no puede estar vacío');
  });
});