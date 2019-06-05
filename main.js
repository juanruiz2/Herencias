const {Maestro} = require('./Maestro');
const {MFisica} = require('./MFisica');
const {MMusica} = require('./MMusica');

const jirafales = new MMusica("quimica", [10,9,8,7,6], 3);
console.log(jirafales.getPromedioGrupo());


