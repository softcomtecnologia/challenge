import axios from "axios";

async function getDatabase(url: string) {
  const res = await axios.get(url);
  const { data } = res;
  return data;
}

export default getDatabase;
