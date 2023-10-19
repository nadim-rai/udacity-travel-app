import { tripCity } from "./tripCity";
import { tripDays } from "./tripDays";
import { tripWeather } from "./tripWeather";
import { tripPicture } from "./tripPicture";

async function handleSubmit(event){
    event.preventDefault();

    let city = document.getElementById('city').value
    const Location = await tripCity(city);
    const { name,lat,lng } = Location

    let date = document.querySelector("#date").value;
    const Days = tripDays(date);

    const Weather = await tripWeather(lng, lat, Days);

    const Picture = await tripPicture(name);
}

export { handleSubmit }