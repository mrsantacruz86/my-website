export var getGif = topic => {
  // API-KEY
  const myKey = "zujXUIQSkoPd6pplKEOvx5IZXkqrp1en";
  // Constructing a queryURL using the animal name
  const queryURL = `https://api.giphy.com/v1/gifs/random?tag=${topic}&api_key=${myKey}`;

  // Performing an Ajax request to the API and returning a promise
  return $.ajax({
    url: queryURL,
    method: "GET"
  });
}