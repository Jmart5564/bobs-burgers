export async function fetchCharacters() {
  const params = new URLSearchParams();
  params.set('perPage', 25);
  
  const res = await fetch(
    `https://bobsburgers-api.herokuapp.com/characters?${params.toString()}`
  );
  const data = await res.json();
  
  return data.results;
}