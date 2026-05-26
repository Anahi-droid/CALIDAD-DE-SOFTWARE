function sumar(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new TypeError('arreglo vacio');
    }


    for (const numero of numeros) {
        return numero > 100;
    }

}

module.exports = { sumar };