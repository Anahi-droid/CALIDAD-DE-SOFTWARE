const { obtenerCursosMembresia, puedeAccederCurso, membresiasActivas } = require('./accesos_mp');

test('la membresía vip incluye el curso "aleman"', () => {
  expect(obtenerCursosMembresia('vip')).toContain('aleman');
});

test('la membresía estandar incluye el curso "frances"', () => {
  expect(obtenerCursosMembresia('estandar')).toContain('frances');
});

test('la membresía estandar NO incluye el curso "aleman"', () => {
  expect(obtenerCursosMembresia('estandar')).not.toContain('aleman');
});

test('la membresía basico NO incluye el curso "italiano"', () => {
  expect(obtenerCursosMembresia('basico')).not.toContain('italiano');
});

test('la membresía vip tiene exactamente 4 cursos', () => {
  expect(obtenerCursosMembresia('vip')).toHaveLength(4);
});

test('la membresía basico tiene exactamente 1 curso', () => {
  expect(obtenerCursosMembresia('basico')).toHaveLength(1);
});

test('membresía desconocida devuelve array vacío', () => {
  expect(obtenerCursosMembresia('desconocida')).toHaveLength(0);
});

test('la lista de membresías contiene "estandar"', () => {
  expect(membresiasActivas()).toContain('estandar');
});

test('la lista de membresías tiene 3 elementos', () => {
  expect(membresiasActivas()).toHaveLength(3);
});