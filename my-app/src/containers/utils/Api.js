import axios from "axios";

const baseURL = "http://localhost:8080/securities";

export const getAllSecurities = async () => {
  try {
    let responseData = await axios.get(baseURL);
    console.log(responseData);
    return responseData.data;
  } catch {
    console.log("error, cant fetch data");
  }
};
