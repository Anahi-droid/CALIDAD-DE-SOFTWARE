function validarNivel(nivel) {
  if (typeof nivel !== 'number') {
    throw new TypeError('El nivel debe ser un número');
  }
  if (nivel < 1 || nivel > 6) {
    throw new RangeError('El nivel debe estar entre 1 y 6');
  }
  return true;
}

function validarIdioma(idioma) {
  if (!idioma || idioma.trim() === '') {
    throw new Error('El idioma no puede estar vacío');
  }
  if (idioma.trim().length < 3) {
    throw new Error('El idioma debe tener al menos 3 caracteres');
  }
  return true;
}

function calcularCostoClase(precioHora, horas) {
  if (horas === 0) {
    throw new Error('Las horas no pueden ser cero');
  }
  return precioHora * horas;
}

module.exports = { validarNivel, validarIdioma, calcularCostoClase };