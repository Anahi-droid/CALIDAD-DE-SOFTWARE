const { verificarEstudiante, sumarInscripcion } = require('./estudiante_mp');

describe('toBe Igualdad estricta en academia de idiomas', () => {
  test('Happy path: códigos de estudiante primitivos con toBe', () => {
    expect(sumarInscripcion(100, 15)).toBe(115); 
    expect(verificarEstudiante('estudiante-vip')).toBe('estudiante-vip');
  });

  test('Happy path: Misma referencia del objeto de datos del estudiante', () => {
    const datosEstudiante = { id: 101, idioma: 'Ingles' };
    const mismoEstudiante = verificarEstudiante(datosEstudiante);
    expect(mismoEstudiante).toBe(datosEstudiante);
  });

  test('Sad path: objeto de estudiante clonado (diferente referencia)', () => {
    const datosEstudiante = { id: 101, idioma: 'Ingles' };
    const clonadoEstudiante = verificarEstudiante(datosEstudiante, { clone: true });
    expect(clonadoEstudiante).not.toBe(datosEstudiante);
  });

  test('Sad path: sumar inscripción con valores no numéricos', () => {
    expect(() => sumarInscripcion('100', '15')).toThrow('precioBase y impuesto deben ser numeros');
  });
});