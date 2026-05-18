
function estadoTemperatura(temperatura) {
    if (typeof temperatura !== 'number' || Number.isNaN(temperatura)) {
        throw new TypeError('temperatura inválida');
    }
    if (temperatura >= 30) {
        return "Calor";
    } else if (temperatura >= 15) {
        return "Templado"; 
    } else {
        return "Frío"; 
    }
}

module.exports={ estadoTemperatura };