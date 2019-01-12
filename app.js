const argv = require('./yargs/yargs').argv;
const location = require("./location/location");
const lol = require('./League of Legends/lol-api-v4');
const cfg = require('./config');
lol.setConfig('RGAPI-a7dd3add-5f67-43b2-ac35-683e216d0537');
const clima = require('./openWeather/weather');
clima.setApiKey(cfg.openWeatherKey);


let getInfo = async() => {
    try {
        let coors = await location.getLatLng(argv.direccion);
        let temp = await clima.getTemp(coors.lng, coors.lat);
        return `el clima en ${ coors.direccion} es de ${temp}`;
    } catch (error) {
        throw `No se encontro el clima para la ciudad ${argv.direccion}`;
    }
}

getInfo()
    .then(resp => {
        console.log(resp, );
    })
    .catch(err => {
        console.log(err, "fp");
    });