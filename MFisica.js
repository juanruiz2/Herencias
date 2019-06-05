//Importamos Super Clase
const{ Maestro } = require('./Maestro').default;

class MFisica extends Maestro{
    constructor(antiguedad){
        console.log("Se creo el Maestro de Física");
        super(materia, promedioGrupo);
        this.antiguedad = antiguedad;
    }
getAntiguedad(){
    return this.antiguedad;
}

}    

module.exports = {
    MFisica,
}
