const axios = require('axios');

const weather = async (lat, lng, days, key ) =>{
    if(days < 0){
        return{
            error: true
        }
    }
    
    if(days > 0 && days <= 7){
        const {data} = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&units=M&key=${key}`)
        const {weather , temp} = data.data[0];
        const { description } = weather;
        const weather_data = {description, temp}
        return weather_data
    }else{
        const {data} = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&units=M&key=${key}`)
        const {weather , temp, app_max_temp, app_min_temp} = data.data[data.data.length -1];
        const {description} = weather;
        const weather_data = {description, temp, app_max_temp, app_min_temp}
        return weather_data
    }
}

module.exports = {weather};