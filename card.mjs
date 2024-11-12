import { fetchFilms } from "./api.mjs";
import { displayCard } from "./displayCard.mjs";

async function main() {
  try {
    const films = await fetchFilms();
    displayCard(films); // Add this line to display cards
  } catch (error) {
    console.log(error);
  }
}

main();
