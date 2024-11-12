import { sortFilms } from "./sort.mjs";

export async function renderSortableTable(films) {
  let rowsHTML = "";

  for (const film of films) {
    rowsHTML += `
      <tr>
        <td>${film.title}</td>
        <td>${film.release_date}</td>
        <td>${film.director}</td>
        <td>${film.description}</td>
      </tr>
    `;
  }

  const tableHTML = `
    <table class="table table-striped table-hover table-bordered">
      <thead class="thead-dark">
        <tr>
          <th data-key="title">Title <span>▶</span></th>
          <th data-key="release_date">Release Date <span>▶</span></th>
          <th data-key="director">Director <span>▶</span></th>
          <th data-key="description">Description <span>▶</span></th>
        </tr>
      </thead>
      <tbody>
        ${rowsHTML}
      </tbody>
    </table>
  `;

  document.body.insertAdjacentHTML("afterbegin", tableHTML);

  const table = document.querySelector("table");
  const thead = table.querySelector("thead");
  let sortDirection = "asc";

  thead.addEventListener("click", (e) => {
    const th = e.target.closest("th");
    if (!th) return;

    const key = th.dataset.key;
    const sortedFilms = sortFilms([...films], key, sortDirection);

    updateTableBody(sortedFilms);
    updateSortIndicator(th);
    sortDirection = sortDirection === "asc" ? "desc" : "asc";
  });

  function updateTableBody(sortedFilms) {
    let sortedRowsHTML = "";
    for (const film of sortedFilms) {
      sortedRowsHTML += `
        <tr>
          <td>${film.title}</td>
          <td>${film.release_date}</td>
          <td>${film.director}</td>
          <td>${film.description}</td>
        </tr>
      `;
    }
    table.querySelector("tbody").innerHTML = sortedRowsHTML;
  }

  function updateSortIndicator(th) {
    const allTh = thead.querySelectorAll("th");
    allTh.forEach((th) => (th.querySelector("span").textContent = "▶"));
    th.querySelector("span").textContent = sortDirection === "asc" ? "▲" : "▼";
  }
}
