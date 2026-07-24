function obtenerCursosMembresia(membresia) {
  const tabla = {
    vip:      ['ingles', 'frances', 'aleman', 'italiano'],
    estandar: ['ingles', 'frances'],
    basico:   ['ingles'],
  };
  return tabla[membresia] ?? [];
}

function puedeAccederCurso(membresia, curso) {
  return obtenerCursosMembresia(membresia).includes(curso);
}

function membresiasActivas() {
  return ['vip', 'estandar', 'basico'];
}

module.exports = { obtenerCursosMembresia, puedeAccederCurso, membresiasActivas };