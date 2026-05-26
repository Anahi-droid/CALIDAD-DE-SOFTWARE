const { sumar } = require('./sumar');

describe('Suma:', () => {

    test('Happy path: numeros = [10,40,110] = 160', () => {
        expect(sumar([10,40,110])).toBe(160);
    });

    test('Happy path: numeros = [50,30,220] = 300', () => {
        expect(sumar([50,30,220])).toBe(300);
    });

    test('Sad path: entrada invalida', () => {
        expect(() => sumar([])).toThrow('arreglo vacio');
        expect(() => sumar()).toThrow('arreglo vacio');
        expect(() => sumar(10)).toThrow('arreglo vacio');
    });

});