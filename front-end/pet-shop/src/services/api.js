import axios from "axios";
// Caso fosse consumir uma API Rest faria uso de axios da seguinte forma
export const getFromAPI = async (url) => {
  const res = await axios.get(url);
  const {
    data: { response },
  } = res;
  return response;
};
