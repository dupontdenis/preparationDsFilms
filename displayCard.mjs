import { generateCard } from "./generateCard.mjs";

export function processCard(films) {
  // Example processing: Add a placeholder image if the film doesn't have one
  return films.map(film => ({
    ...film,
    image: film.image || 'https://via.placeholder.com/150'
  }));
}

export function renderCards(films, element) {
  if (!films.length) return;

  const processedFilms = processCard(films);
  const cardsHTML = processedFilms.map((film) => generateCard(film)).join("");

  const containerHTML = `
    <div class="container">
      <div class="row">
        ${cardsHTML}
      </div>
    </div>
  `;

  element.insertAdjacentHTML("afterbegin", containerHTML);
}

export function displayCard(films) {
  renderCards(films, document.body);
}
