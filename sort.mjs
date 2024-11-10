export function sortFilms(films, key, sortDirection) {
  return films.sort((a, b) => {
    if (a[key] < b[key]) return sortDirection === "asc" ? -1 : 1;
    if (a[key] > b[key]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
}
