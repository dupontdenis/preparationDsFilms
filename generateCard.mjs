export function generateCard(film) {
  return `
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="${film.image}" class="card-img-top" alt="${film.title}">
        <div class="card-body">
          <p class="card-text">${film.title}</p>
        </div>
      </div>
    </div>
  `;
}
