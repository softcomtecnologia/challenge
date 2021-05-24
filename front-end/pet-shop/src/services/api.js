import axios from "axios";
import data from "./mock.json";

export const getFromAPI = async (url) => {
  if (!url) {
    return data;
  }
  const res = await axios.get(url);
  const {
    data: { response },
  } = res;
  return response;
};
