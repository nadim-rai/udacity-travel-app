import { tripCity } from "./tripCity";
import { tripDays } from "./tripDays";
import { tripWeather } from "./tripWeather";
import { tripPicture } from "./tripPicture";
import { travelUI } from './travelUI';

async function handleSubmit(event){
    event.preventDefault();

    let city = document.getElementById('city').value
    const Location = await tripCity(city);

    if(Location && Location.error){
        document.querySelector(".city_error").innerHTML = "City Not Found"
        return;
    }else if(Location && !Location.error){
        document.querySelector(".city_error").innerHTML = "";
        const { name,lat,lng } = Location;

        let date = document.querySelector("#date").value;
        if(!date){
            document.querySelector(".date_error").innerHTML = 'Please Select Date';
            return;
        }else if (date){
            document.querySelector(".date_error").innerHTML = '';
            const Days = tripDays(date);
            const Weather = await tripWeather(lng, lat, Days);
            const Picture = await tripPicture(name);
            travelUI(Days, Weather, Picture, Location, date);
        }
    }
 

    // console.log("weather form",Weather, Picture, Days, Location, date)
    

    // scroll to the bottom after updating UI
    autoScroll()
    
}

function autoScroll(){
    window.scrollTo(0, document.querySelector(".travel-section").scrollHeight + 2550);
}

export { handleSubmit }