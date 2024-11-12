const films = [
  { director: "Christopher Nolan", film: "Inception" },
  { director: "Christopher Nolan", film: "Dunkirk" },
  { director: "Christopher Nolan", film: "The Prestige" },
  { director: "Steven Spielberg", film: "E.T." },
  { director: "Quentin Tarantino", film: "Pulp Fiction" },
];

function reduce(films) {
  return films.reduce((acc, film) => {
    let director = acc.find((director) => director.name === film.director);
    if (!director) {
      director = { name: film.director, films: [] };
      acc.push(director);
    }
    director.films.push(film.film);
    return acc;
  }, []);
}

console.log(reduce(films));

function useValues(films) {
  return Object.values(
    films.reduce((acc, film) => {
      acc[film.director] = acc[film.director] || {
        name: film.director,
        films: [],
      };
      acc[film.director].films.push(film.film);
      return acc;
    }, {})
  );
}

console.log(useValues(films));

function useGroupBy(films) {
  const groupedByDirector = Object.groupBy(films, (film) => film.director);
  console.log(groupedByDirector);
  return Object.entries(groupedByDirector).map(([director, films]) => ({
    name: director,
    films: films.map((film) => film.film),
  }));
}

console.log(useGroupBy(films));
