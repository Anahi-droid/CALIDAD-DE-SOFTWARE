function aprobado(nota){
    if(!Number.isInteger(nota) || nota<0 || nota>10  )
        throw new TypeError('nota invalida');
    estado="Reprobado";
    if(nota>7) {
        estado="Aprobado"
    }else if(nota>=4){
        estado="Supletorio"
    }
    return estado;
}

module.exports={ aprobado };