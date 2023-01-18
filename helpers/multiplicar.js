const fs = require('fs');

const crearArchivo = async (base = 1) => {

    try {
        console.log('------------------------------')
        console.log(`TABLA DEL ${base}`);
        console.log('------------------------------')

        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        let nomFile = `tabla-${base}.txt`;

        fs.writeFileSync(nomFile, salida);
        console.log(salida);
        return nomFile;
    }
    catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}