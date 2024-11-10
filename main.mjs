import { fetchFilms } from "./api.mjs";
import { displayTable } from "./displayTable.mjs";
import { displayCard } from "./displayCard.mjs";

async function main() {
  try {
    const films = await fetchFilms();
    displayTable(films);
    displayCard(films); // Add this line to display cards
  } catch (error) {
    console.log(error);
  }
}

main();
