const API_URL = "https://www.fruityvice.com/api/fruit";

export async function getFruites() {
  const data = fetch(`${API_URL}/all`)
    .then((response) => response.json())
    .then((data) => data);

  return data;
}

export async function getFruitById(fruitId) {
  const data = fetch(`${API_URL}/${fruitId}`)
    .then((response) => response.json())
    .then((data) => data);

  return data;
}
