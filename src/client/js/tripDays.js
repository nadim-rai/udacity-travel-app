const tripDays = (date) => {

    const startDate = new Date();
    const endDate = new Date(date);
  
    const timeDiff = endDate.getTime() - startDate.getTime();
  
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log("days",daysDiff);

    return daysDiff;
  };

export{ tripDays }