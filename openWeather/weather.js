const axios = require('axios');
let api_key = "api";

let getTemp = async(lng, lat) => {

    if (api_key === "api") {
        throw new Error("Api_key no definida.");
    }
    try {
        let owm = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`);
        let temp = owm.data.main.temp;
        return temp;
    } catch (error) {
        throw error;
    }


}

let setApiKey = (key) => {
    api_key = key;
}

module.exports = {
    setApiKey,
    getTemp
}