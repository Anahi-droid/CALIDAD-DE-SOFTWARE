function sumar(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new TypeError('arreglo vacio');
    }

    let suma = 0;

    for (const numero of numeros) {
        suma += numero;
    }

    return suma;
}

module.exports = { sumar };