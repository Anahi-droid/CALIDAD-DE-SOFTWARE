
function promedio(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new TypeError('arreglo vacio');
    }

    let total = 0;

    for (const numero of numeros) {
        total += numero;
    }

    return total / numeros.length;
}

module.exports = { promedio };