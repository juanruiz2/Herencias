//Importamos Super Clase
const{ Maestro } = require('./Maestro');

class MMusica extends Maestro{
    constructor(m, p, edad){
        console.log("Se creo el Maestro de Música");
        super(m, p);
        this.edad = edad;
    }
getEdad(){
    return this.edad;
}

}    

module.exports = {
    MMusica,
}
