import { dateFormat } from "./utility/dateFormat";

let travelContainer = document.querySelector('.travel-container');

const travelUI = (Days, Weather, Picture, Location, Date) => {
    console.log("weather", Weather);

    //Format Date
    const travelDate = dateFormat(Date);
    const { day, month, dayNumber, year} = travelDate;
    let TravelDateFormat = `${day} ${month} ${dayNumber}, ${year}`;

    //Create Travel Detail Div
    let travel_detail_div = document.createElement("div");
    travel_detail_div.setAttribute('class', 'travel-detail');


    //Create Trave Picture Div
    let travel_pic_div = document.createElement("div");
    travel_pic_div.setAttribute('class','travel-pic');

    let img_elem = document.createElement("img");
    img_elem.setAttribute("src", Picture);
    travel_pic_div.append(img_elem);

    travel_detail_div.append(travel_pic_div);

    //Create Travel Content Div
    let travel_content_div = document.createElement("div");
    travel_content_div.setAttribute('class', 'travel-content');

    let h2_elem = document.createElement('h2');
    h2_elem.setAttribute('class', 'city-name');
    h2_elem.innerHTML = `My trip to ${Location.name}`;

    let h3_elem = document.createElement('h3');
    h3_elem.setAttribute('class', 'trip-date');
    h3_elem.innerHTML = `Departing: ${ TravelDateFormat }`;

    let trip_day_elem = document.createElement('p');
    trip_day_elem.setAttribute('class', 'trip-day');
    trip_day_elem.innerHTML = `Your trip is ${Days} days away.`;

    let weather_elem = document.createElement('p');
    weather_elem.setAttribute('class', 'weather');
    weather_elem.innerHTML = `Weather is expected to be: ${Weather.description}`;

    let temp_elem = document.createElement('p');
    temp_elem.setAttribute('class', 'temp');
    temp_elem.innerHTML = `Temperature is expected to be: ${Weather.temp}&degC`;

    let max_temp_elem = document.createElement('p');
    max_temp_elem.setAttribute('class', 'max-temp');
    max_temp_elem.innerHTML =  Days > 7 ? `Max-Temp: ${Weather.app_max_temp}&degC` : "";

    let min_temp_elem = document.createElement('p');
    min_temp_elem.setAttribute('class', 'min-temp');
    min_temp_elem.innerHTML = Days > 7 ? `Min-Temp: ${Weather.app_min_temp}&degC` : "";
   
    travel_content_div.append(h2_elem);
    travel_content_div.append(h3_elem);
    travel_content_div.append(trip_day_elem);
    travel_content_div.append(weather_elem);
    travel_content_div.append(temp_elem);
    travel_content_div.append(max_temp_elem);
    travel_content_div.append(min_temp_elem);

    travel_detail_div.append(travel_content_div);
    travelContainer.append(travel_detail_div);

  };

  export { travelUI }