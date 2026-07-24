function verificarEstudiante(estudiante, { clone = false } = {}) {
    const esObjeto = estudiante !== null && typeof estudiante === 'object';
    if (clone) {
        if (!esObjeto) throw new TypeError('Solo se puede clonar un objeto');

        if (Array.isArray(estudiante)) return [...estudiante];
        return { ...estudiante };
    }
    return estudiante;
}

function sumarInscripcion(precioBase, impuesto) {
    if (typeof precioBase !== 'number' || typeof impuesto !== 'number') {
        throw new TypeError('precioBase y impuesto deben ser numeros');
    }
    return precioBase + impuesto;
}

module.exports = { verificarEstudiante, sumarInscripcion };