//Superclase
class Maestro{
    constructor(materia, promedioGrupo){
        this.materia = materia;
        this.promedioGrupo = promedioGrupo;
        console.log("se creó al Maestro");

    }
    getMateria(){
        return this.materia;
    }


    getPromedioGrupo(){
        let sumaTotal = 0;

        for (let i = 0; i < this.promedioGrupo.length; i++) {
            sumaTotal += this.promedioGrupo[i];
        }
  
        return (sumaTotal/this.promedioGrupo.length);
    }
}

module.exports = { Maestro,} 

