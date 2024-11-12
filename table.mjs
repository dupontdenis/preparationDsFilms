import { fetchFilms } from "./api.mjs";
import { renderSortableTable } from "./sortableTable.mjs";

async function main() {
  try {
    const films = await fetchFilms();
    renderSortableTable(films);
  } catch (error) {
    console.log(error);
  }
}

main();
