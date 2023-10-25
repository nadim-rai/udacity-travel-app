import { postData } from "./postData";

const tripCity = async (city) =>{
    const data =  await postData("http://localhost:3000/location", { city: city })
    return data
}

export { tripCity }