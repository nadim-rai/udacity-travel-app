const axios = require('axios');

const location = async (city, username) => {
    const {data} = await axios.get(`https://secure.geonames.org/searchJSON?q=${city}&maxRows=1&username=${username}`)
    if(data.geonames.length < 1){
        return{
            error: true
        }
    }

    const {name, lat, lng } = data.geonames[0];
    return {name, lat, lng}
}

module.exports =  {location}