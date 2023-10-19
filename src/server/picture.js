const axios = require("axios");


const picture = async(city, key) => {
    const {data} = await axios.get(`https://pixabay.com/api/?key=${key}&q=${city}&image_type=photo`);
    const defaultImage = 'https://dummyimage.com/600x400/000/fff.jpg&text=Image+Not+Found'
    const image =await data.hits[0]? await data.hits[0].webformatURL: defaultImage
    if(image){
        return {
            image
        }
    }
}

module.exports = {
    picture
}