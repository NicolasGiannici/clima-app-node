const axios = require('axios');


let getLatLng = async(direccion) => {
    let encodedDireccion = encodeURI(direccion);
    try {
        let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedDireccion}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`);

        if (respuesta.data.status === "ZERO_RESULTS") {
            throw new Error(`No se encontraron resultados`);
        }
        let direccion = respuesta.data.results[0].formatted_address;
        let longitud = respuesta.data.results[0].geometry.location.lng;
        let latitud = respuesta.data.results[0].geometry.location.lat;
        return {
            direccion,
            lng: longitud,
            lat: latitud
        };
    } catch (err) {
        throw err;
    }
}


module.exports = {
    getLatLng
}