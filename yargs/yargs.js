const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            demand: true,
            desc: "Direccion del lugar a obtener el clima"
        }
    })
    .help()
    .argv;


module.exports = {
    argv
};