const { promedio } = require('./promedio');

describe('Suma hasta:', () => {

    test('Happy path: numeros = [5,5,5] = 5', () => {
        expect(promedio([5,5,5])).toBe(5);
    });

    test('Happy path: numeros = [6,6,6] = 6', () => {
        expect(promedio([6,6,6])).toBe(6);
    });

    test('Sad path: entrada invalida', () => {
        expect(() => promedio([])).toThrow('arreglo vacio');
        expect(() => promedio()).toThrow('arreglo vacio');
        expect(() => promedio(10)).toThrow('arreglo vacio');
    });

});