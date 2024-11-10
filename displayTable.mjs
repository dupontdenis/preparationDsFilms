import { renderTable } from "./generatedTable.mjs";

export function processFilms(films) {
  return films.reduce((acc, film) => {
    let director = acc.find((d) => d.name === film.director);
    if (!director) {
      director = { name: film.director, films: [] };
      acc.push(director);
    }
    director.films.push(film.title);
    return acc;
  }, []);
}

export function displayTable(films) {
  const directorsArray = processFilms(films);

  console.table(directorsArray);

  renderTable(directorsArray, document.body);
}
