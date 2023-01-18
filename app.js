
const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('yargs').option('b',{
    alias: 'base',
    type: 'number'
}).argv;

console.clear();
console.log(argv);

console.log('base', argv.base);


// crearArchivo(base).then(nombreArchivo => {
//     console.log(`El archivo ${nombreArchivo} fue creado exitosamente`);
// }).catch(err => {
//     console.log(`Error creando el archivo ${nombreArchivo}`);
// })