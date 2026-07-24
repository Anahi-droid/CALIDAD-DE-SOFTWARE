const { Matricula } = require('./matricula_mp');

describe('Sistema de matrícula de idiomas', () => {
  let matricula;

  beforeEach(() => {
    matricula = new Matricula();
  });

  test('empieza vacío', () => {
    expect(matricula.items).toHaveLength(0);
    expect(matricula.calcularTotal()).toBe(0);
  });

  test('inscribir un curso lo añade a items', () => {
    matricula.inscribir({ id: 1, nombre: 'Ingles', precio: 50, horas: 2 });

    expect(matricula.items).toHaveLength(1);
    expect(matricula.items[0].nombre).toBe('Ingles');
  });

  test('inscribir el mismo curso incrementa sus horas', () => {
    matricula.inscribir({ id: 1, nombre: 'Ingles', precio: 50, horas: 2 });
    matricula.inscribir({ id: 1, nombre: 'Ingles', precio: 50, horas: 3 });

    expect(matricula.items).toHaveLength(1);
    expect(matricula.items[0].horas).toBe(5);
  });

  test('calcularTotal suma precio × horas de todos los items', () => {
    matricula.inscribir({ id: 1, nombre: 'Ingles',  precio: 50, horas: 2 });
    matricula.inscribir({ id: 2, nombre: 'Frances', precio: 60, horas: 3 });

    expect(matricula.calcularTotal()).toBeCloseTo(280, 2);
  });

  test('eliminar un curso lo quita de items', () => {
    matricula.inscribir({ id: 1, nombre: 'Ingles',  precio: 50, horas: 2 });
    matricula.inscribir({ id: 2, nombre: 'Frances', precio: 60, horas: 3 });

    matricula.eliminar(1);

    expect(matricula.items).toHaveLength(1);
    expect(matricula.items[0].id).toBe(2);
  });

  test('eliminar un id inexistente lanza error', () => {
    expect(() => matricula.eliminar(99)).toThrow('Curso con id 99 no encontrado');
  });

  test('horasTotales suma todas las horas', () => {
    matricula.inscribir({ id: 1, nombre: 'Ingles',  precio: 50, horas: 4 });
    matricula.inscribir({ id: 2, nombre: 'Frances', precio: 60, horas: 3 });

    expect(matricula.horasTotales).toBe(7);
  });

  test('la matrícula sigue vacía al inicio de este test', () => {
    expect(matricula.items).toHaveLength(0);
  });
});