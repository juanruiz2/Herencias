const {Maestro} = require('./Maestro');
const {MFisica} = require('./MFisica');
const {MMusica} = require('./MMusica');

const jirafales = new Maestro("quimica", [10,9,8,7,6]);
console.log(jirafales.getPromedioGrupo());


