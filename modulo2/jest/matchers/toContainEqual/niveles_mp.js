function obtenerNiveles() {
  return [
    { id: 1, nombre: 'Ingles Basico', precio: 120, modalidad: 'online' },
    { id: 2, nombre: 'Frances Intermedio', precio: 150, modalidad: 'presencial' },
    { id: 3, nombre: 'Aleman Avanzado', precio: 200, modalidad: 'online' },
    { id: 4, nombre: 'Italiano Basico', precio: 110, modalidad: 'presencial' },
  ];
}

function filtrarPorModalidad(niveles, modalidad) {
  return niveles.filter(n => n.modalidad === modalidad);
}

module.exports = { obtenerNiveles, filtrarPorModalidad };