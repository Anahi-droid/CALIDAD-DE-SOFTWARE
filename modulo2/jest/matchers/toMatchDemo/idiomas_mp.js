function validarCorreoIdioma(email) {
    if (typeof email !== 'string') throw new TypeError('email debe ser string');
    const regex = /^[\w.-]+@idiomas\.ec$/i;
    return regex.test(email);
}

function encontrarTermino(texto, patron) {
    if (typeof texto !== 'string' || typeof patron !== 'string') {
        throw new TypeError('texto y patrón deben ser strings');
    }
    return new RegExp(patron, 'i').test(texto);
}

function limpiarNombreCurso(texto) {
    if (typeof texto !== 'string') throw new TypeError('texto debe ser string');
    return texto.trim().replace(/\s+/g, ' ');
}

module.exports = { validarCorreoIdioma, encontrarTermino, limpiarNombreCurso };