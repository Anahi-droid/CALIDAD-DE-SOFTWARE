class Matricula {
  constructor() {
    this.items = [];
  }

  inscribir(curso) {
    const existente = this.items.find(i => i.id === curso.id);
    if (existente) {
      existente.horas += curso.horas;
    } else {
      this.items.push({ ...curso });
    }
  }

  eliminar(id) {
    const indice = this.items.findIndex(i => i.id === id);
    if (indice === -1) throw new Error(`Curso con id ${id} no encontrado`);
    this.items.splice(indice, 1);
  }

  calcularTotal() {
    return this.items.reduce((total, item) => {
      return total + item.precio * item.horas;
    }, 0);
  }

  limpiar() {
    this.items = [];
  }

  get horasTotales() {
    return this.items.reduce((sum, item) => sum + item.horas, 0);
  }
}

module.exports = { Matricula };