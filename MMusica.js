//Importamos Super Clase
const{ Maestro } = require('./Maestro').default;

class MMusica extends Maestro{
    constructor(edad){
        console.log("Se creo el Maestro de Música");
        super(materia, promedioGrupo);
        this.edad = edad;
    }
getEdad(){
    return this.edad;
}

}    

module.exports = {
    MMusica,
}
