function obtenerCursos() {
return ['ingles', 'frances', 'aleman', 'italiano'];
}

function contieneIdioma(texto, idioma) {
if (typeof texto !== 'string' || typeof idioma !== 'string') {
throw new TypeError('Ambos argumentos deben ser strings');
}
return texto.toLowerCase().includes(idioma.toLowerCase());
}

function agregarEstudiante(lista, estudiante) {
if (!Array.isArray(lista)) throw new TypeError('lista debe ser un array');
if (!estudiante) throw new Error('estudiante no puede estar vacío');
lista.push(estudiante);
return lista;
}

module.exports = { obtenerCursos, contieneIdioma, agregarEstudiante };