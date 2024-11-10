export async function fetchFilms() {
  const url = "https://ghibliapi.vercel.app/films";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const films = await response.json();
  return films;
}
