import { tripDays } from "../tripDays";

const inputChecker = () => {
    document.querySelector(".city_error").innerHTML = "";
    document.querySelector(".date_error").innerHTML = "";

    let city = document.getElementById('city').value
    let date = document.querySelector("#date").value;

    if(!city){
        document.querySelector(".city_error").innerHTML = ' Cannot Be Blank'
      return;
    }
    if(!date){
        document.querySelector(".date_error").innerHTML = `Please Select Date`;
      return;
    }
    if(tripDays(date) < 0){
        document.querySelector(".date_error").innerHTML = 'Start Date Cannot Be Earlier Than Today';
      return;
    }

    return true
  };
  
  export{ inputChecker }