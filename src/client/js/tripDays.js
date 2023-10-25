const tripDays = (date) => {

    const startDate = new Date();
    const endDate = new Date(date);
  
    const time_difference = endDate.getTime() - startDate.getTime();
  
    const day_difference = Math.ceil(time_difference / (1000 * 3600 * 24));
  
    return day_difference;
  };

  module.exports = { tripDays }

//https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/