const tripPicture = async (city_name) => {
    const { data } = await postData("http://localhost:3000/picture", {
      city_name,
    });
    const { image } = await data;
    return image;
  };

  const postData = async ( url = "", data = {})=>{
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
      body: JSON.stringify(data), 
    });
    try {
        const newData = await response.json();
        return newData;
    }catch(error) {
      console.log("error", error);
    }
}

export { tripPicture }