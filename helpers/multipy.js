const fs = require('fs');
const color = require('colors');

/*
const crearArchivo = (base) => {
    const promise = new Promise((resolve, reject) => {

        let salida = '';
        salida = `=====Tabla del ${base}=====\n`;

        for (let i = 1; i <= 10; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('Archivo creado con éxito');
            }
        });

    });
    return promise;
};
*/

const crearArchivo = async(base = 1, listar, hasta) => {
    try {
        let salida = '';
        let consola = '';
        salida = `=====Tabla del ${base}=====\n`;
        consola = color.green.bold(`=====Tabla del ${base}=====\n`);

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${color.cyan(base)} x ${color.magenta(i)} = ${color.brightGreen(base * i)}\n`;
        }

        if (listar) {
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return color.brightMagenta(`tabla-${base}.txt`);

    } catch (error) {
        throw error;
    }
};

module.exports = { crearArchivo };