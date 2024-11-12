import { fetchFilms } from "./api.mjs";
import { displayTable } from "./displayTable.mjs";


async function main() {
  try {
    const films = await fetchFilms();
    displayTable(films);
  } catch (error) {
    console.log(error);
  }
}

main();
