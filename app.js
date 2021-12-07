const { crearArchivo } = require('./helpers/multipy');
const argv = require('./config/yargs');


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));