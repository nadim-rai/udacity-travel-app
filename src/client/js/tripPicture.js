import { postData } from "./postData";

const tripPicture = async (city_name) => {
    const data  = await postData("http://localhost:3000/picture", {
      city_name,
    });
    const { image } = await data;
    return image;
  };

export { tripPicture }