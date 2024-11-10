export function renderTable(items, element) {
  if (!items.length) return;

  const headers = Object.keys(items[0]);

  const generateTableHeader = (headers) => `
    <thead class="thead-dark">
      <tr>
        ${headers
          .map(
            (header) =>
              `<th>${header.charAt(0).toUpperCase() + header.slice(1)}</th>`
          )
          .join("")}
      </tr>
    </thead>
  `;

  const generateTableBody = (items, headers) => `
    <tbody>
      ${items
        .map(
          (item) => `
        <tr>
          ${headers
            .map(
              (header) => `
            <td>${
              Array.isArray(item[header])
                ? item[header].join(", ")
                : item[header]
            }</td>
          `
            )
            .join("")}
        </tr>
      `
        )
        .join("")}
    </tbody>
  `;

  const tableHTML = `
    <table class="table table-striped table-hover table-bordered">
      ${generateTableHeader(headers)}
      ${generateTableBody(items, headers)}
    </table>
  `;

  element.insertAdjacentHTML("afterbegin", tableHTML);
}
