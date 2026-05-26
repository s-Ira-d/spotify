const CLIENT_ID = "637277b8";
export async function fetchTracks() {
  const response = await fetch("");

  const data = await response.json();

  return data.results;
}
