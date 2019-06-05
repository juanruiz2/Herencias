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
        for (let i = 0; i < promedioGrupo.length; i++) {
            let promedioGrupo = 0;
            let sumaPromedioGrupo = 0;
            promedioGrupo += promedioGrupo[i];
            let promedioGrupo = sumaPromedioGrupo / promedioGrupo.length;
        }
  
        return this.promedioGrupo;
    }
}

module.exports = {Maestro,}

