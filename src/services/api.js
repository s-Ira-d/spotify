const CLIENT_ID = "4eabeff4";

export async function fetchTracks(search = "") {
  const response = await fetch(
    `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=12&namesearch=${search}`
  );

  const data = await response.json();

  return data.results;
}
