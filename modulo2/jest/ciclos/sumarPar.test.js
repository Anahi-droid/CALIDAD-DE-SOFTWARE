const { sumarPar } = require('./sumarPar');

describe('Suma Par:', () => {

    test('Happy path: numeros = [2,2,2] = 2', () => {
        expect(sumarPar([2,2,2])).toBe(3);
    });

    test('Happy path: numeros = [8,8,8] = 8', () => {
        expect(sumarPar([8,8,8])).toBe(3);
    });

    test('Sad path: entrada invalida', () => {
        expect(() => sumarPar([])).toThrow('arreglo vacio');
        expect(() => sumarPar()).toThrow('arreglo vacio');
        expect(() => sumarPar(10)).toThrow('arreglo vacio');
    });

});