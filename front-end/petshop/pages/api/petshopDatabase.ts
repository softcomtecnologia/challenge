import data from "./database.json";

async function giveDatabase(request, response) {
  const database = data;
  response.json(database);
}

export default giveDatabase;
