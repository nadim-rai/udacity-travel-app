import { tripCity } from "./tripCity";

function handleSubmit(event){
    event.preventDefault();
    let city = document.getElementById('city').value
   const Location = tripCity(city);
}

export { handleSubmit }