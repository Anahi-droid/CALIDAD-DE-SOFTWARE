const { obtenerNiveles, filtrarPorModalidad } = require('./niveles_mp');

test('el listado contiene el nivel Frances Intermedio', () => {
  const niveles = obtenerNiveles();

  expect(niveles).toContainEqual({
    id: 2, nombre: 'Frances Intermedio', precio: 150, modalidad: 'presencial',
  });
});

test('el listado NO contiene un nivel con id=99', () => {
  const niveles = obtenerNiveles();

  expect(niveles).not.toContainEqual(
    expect.objectContaining({ id: 99 })
  );
});

test('filtrar modalidad online devuelve Ingles Basico y Aleman Avanzado', () => {
  const niveles = obtenerNiveles();
  const online = filtrarPorModalidad(niveles, 'online');

  expect(online).toHaveLength(2);
  expect(online).toContainEqual(
    expect.objectContaining({ nombre: 'Ingles Basico' })
  );
  expect(online).toContainEqual(
    expect.objectContaining({ nombre: 'Aleman Avanzado' })
  );
});