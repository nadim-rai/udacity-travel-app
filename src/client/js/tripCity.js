const tripCity = async (city) =>{
    const data =  await postData("http://localhost:3000/location", { city: city })
    console.log("frontend", data);
    return data
}

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

export { tripCity }