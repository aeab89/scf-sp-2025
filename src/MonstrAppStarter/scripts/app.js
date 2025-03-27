const abilitiesUL = document.getElementById("abilities");
const imageContainer = document.getElementById("image")
const selectPokemon = document.getElementById("pokemonSelector");
const searchPokemon = document.getElementById("searchButton");
const inputPokemon = document.getElementById("pokemonSearchBox");

//Function to populate dropdown with pokemon names
function BuildPokemonSelectOptions(pokemonOptions){
  pokemonOptions.forEach(element => {
      let option = document.createElement("option"); //Create option element
      option.innerHTML = element.name; //Set displayed text to pokemon name
      option.value = element.name; //Set option value to pokemon name
      selectPokemon.appendChild(option); //Append option to dropdown
  });
}

//Fetches list of pokemon names for the dropdown menu
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json()) //Convert response to JSON
  .then(data => BuildPokemonSelectOptions(data.results)) //Populate dropdown with pokemon names
  .catch(error => console.error('Error:', error)); //Catch and log any errors

//Function to built and display abilities list
function BuildAbilitiesList(abilities){
  abilitiesUL.innerHTML = "" //Clear existing list
  abilities.forEach(element => {
  let li = document.createElement("li"); //Create list item
  li.innerHTML = element.ability.name; //Set list item text to ability name
  abilitiesUL.appendChild(li); //Append list item to UL
  });
}

//Function to display pokemon image
function ShowSelectionImages(sprites){
  imageContainer.innerHTML = ""; //Clear previous image
  let image = document.createElement("img"); //Create image element
  image.src = sprites.front_default; //Set image source to front sprite
  imageContainer.appendChild(image); //Append image to container
}

//Function to fetch a pokemon's data based on its name
function GetOnePokemon(pokemon){
fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon) //Fetch data from API
  .then(response => response.json()) //Convert response to JSON
  .then(data => {
    BuildAbilitiesList(data.abilities); //Populate abilities list
    ShowSelectionImages(data.sprites); //Display pokemon image
})
  .catch(error => console.error('Error:', error)); // Catch and log any errors
}

//Event listener to fetch and display data when a pokemon is selected
selectPokemon.addEventListener ("change", (event => {
  GetOnePokemon(event.target.value);
}))

//Event listener to fetch and display pokemon data when searched by name
searchPokemon.addEventListener ("click", (event => {
  event.preventDefault();
  const pokemonName = inputPokemon.value.trim().toLowerCase(); // Get user input, remove spaces, and turn to lowercase
  if (pokemonName) {
    GetOnePokemon(pokemonName); //Fetch and display pokemon data
  }
}
))