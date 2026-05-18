
const { estadoTemperatura } = require('./estadoTemperatura')

describe('estadoTemperatura', ()=>{
    test('Happy path: 30 => Calor', ()=>{
        expect(estadoTemperatura(30)).toBe('Calor');
    })
    test('Happy path: 15 => Templado', ()=>{
        expect(estadoTemperatura(15)).toBe('Templado');
    })
    test('Happy path: 13 => Frío', ()=>{
        expect(estadoTemperatura(13)).toBe('Frío');
    })
    test('Sad path: temperatura invalida', ()=>{
        expect(()=>estadoTemperatura(-1).toThrow('temperatura invalida'))
        expect(()=>estadoTemperatura('7').toThrow('temperatura invalida'))
        expect(()=>estadoTemperatura(110).toThrow('temperatura invalida'))
        expect(()=>estadoTemperatura().toThrow('temperatura invalida'))
    })
})