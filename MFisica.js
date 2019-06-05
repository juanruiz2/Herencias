//Importamos Super Clase
const{ Maestro } = require('./Maestro');

class MFisica extends Maestro{
    constructor(materia, promedioGrupo, antiguedad, ){
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
