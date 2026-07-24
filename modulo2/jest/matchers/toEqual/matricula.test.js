const { crearEstudiante } = require('./matricula');

describe('Pruebas para crearEstudiante', () => {
  test('Happy path: Retorna el objeto estudiante correctamente', () => {
    expect(crearEstudiante('Carlos', 22)).toEqual({ nombre: 'Carlos', edad: 22 }); 
  });

  test('Sad path: Lanzar error por datos inválidos', () => {
    expect(() => crearEstudiante('', 22)).toThrow('Nombre Invalido');
    expect(() => crearEstudiante('Lucía', -5)).toThrow('Edad invalida');
  });
});