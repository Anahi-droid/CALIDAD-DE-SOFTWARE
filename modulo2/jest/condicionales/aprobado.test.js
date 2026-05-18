const { aprobado } = require('./aprobado')

describe('aprobado', ()=>{
    test('Happy path: 8 => Aprobado', ()=>{
        expect(aprobado(8)).toBe('Aprobado');
    })
    test('Happy path: 5 => Supletorio', ()=>{
        expect(aprobado(5)).toBe('Supletorio');
    })
    test('Sad path: nota invalida', ()=>{
        expect(()=>aprobado(-1).toThrow('nota invalida'))
        expect(()=>aprobado('7').toThrow('nota invalida'))
        expect(()=>aprobado(11).toThrow('nota invalida'))
    })
})