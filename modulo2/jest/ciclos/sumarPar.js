
function sumarPar(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new TypeError('arreglo vacio');
    }

    let contador = 0;

    for (const numero of numeros) {
        if (numero %2 == 0) contador++;
    }

    return contador;
}

module.exports = { sumarPar };