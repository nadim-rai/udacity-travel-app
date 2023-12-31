import { postData } from "./postData";

const tripWeather = async (lng, lat, days) => {
    const  data  = await postData("http://localhost:3000/weather", {
      lng,
      lat,
      days,
    });
    return data;
  };

export { tripWeather }