const HomeSelectPanel = document.getElementById("SlotSelect");
const ChoosePokemonPanel = document.getElementById("ChoosePokemon");
const Slot1PokemonBtn = document.getElementById("Slot1");
const Slot2PokemonBtn = document.getElementById("Slot2");
const Slot1Container = document.getElementById("Slot1Selection");
const Slot2Container = document.getElementById("Slot2Selection");
const BacktoHomeBtn = document.getElementById("backButton");
const SelectButton = document.getElementById("selectButton");
const abilitiesUL = document.getElementById("abilities");
const imageContainer = document.getElementById("image")
const selectPokemon = document.getElementById("pokemonSelector");
const searchPokemon = document.getElementById("searchButton");
const inputPokemon = document.getElementById("pokemonSearchBox");
const statsContainer = document.createElement("div"); //New container for stats
statsContainer.id = "statsContainer";
ChoosePokemonPanel.appendChild(statsContainer); //Appends statsContainer to the ChoosePokemonPanel div

let currentSlot;
let currentSelection = {};
let slot1Selection = {};
let slot2Selection = {};

//EVENT LISTENERS
//Show selection panel when a slot is clicked
Slot1PokemonBtn.addEventListener("click", () => {
  ShowChoicePanel(1)
});
Slot2PokemonBtn.addEventListener("click", () => {
  ShowChoicePanel(2)
});

//Show home selection panel when back button is clicked
BacktoHomeBtn.addEventListener("click", () => {
  ShowHomePanel()
});

//Call fetch function when a pokemon is selected
selectPokemon.addEventListener ("change", (event => {
  GetOnePokemon(event.target.value);
}))

//Call fetch function when pokemon is searched by name
searchPokemon.addEventListener ("click", (event => {
  event.preventDefault();
  const pokemonName = inputPokemon.value.trim().toLowerCase(); // Get user input, remove spaces, and turn to lowercase
  if (pokemonName) {
    GetOnePokemon(pokemonName); //Fetch and display pokemon data
  }
}
))

//Store current selection in chosen slot when clicking select button
SelectButton.addEventListener("click", () => {
  if (currentSlot === 1) {
    slot1Selection = { ...currentSelection };
  } else if (currentSlot === 2) {
    slot2Selection = { ...currentSelection };
  }
  ShowHomePanel();
})


//PANEL TOGGLING FUNCTIONS
//Show pokemon selection panel only
function ShowChoicePanel (slotNumber) {
  currentSlot = slotNumber;
  HomeSelectPanel.style.visibility = 'hidden';
  ChoosePokemonPanel.style.visibility = 'visible';
} 

//Show home panel only and display selected pokemon sprite
function ShowHomePanel () {
  HomeSelectPanel.style.visibility = 'visible';
  ChoosePokemonPanel.style.visibility = 'hidden';
  if(currentSlot == 1){
    if(slot1Selection.sprite){ //Append sprite to slot 1 container after selection is made
      let img = document.createElement("img");
      img.src = slot1Selection.sprite;
      Slot1Container.innerHTML = "";
      Slot1Container.appendChild(img);
    }
  }
  else if(currentSlot == 2){
    if(slot2Selection.sprite){ //Append sprite to slot 2 container after selection is made
      let img = document.createElement("img");
      img.src = slot2Selection.sprite;
      Slot2Container.innerHTML = "";
      Slot2Container.appendChild(img);
    }
  }
}  


//ASYNCHRONOUS FETCH REQUEST
//Fetch list of pokemon names for the dropdown list on page load
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json()) //Convert response to JSON
  .then(data => BuildPokemonSelectOptions(data.results)) //Populate dropdown with pokemon names
  .catch(error => console.error('Error:', error)); //Catch and log any errors

  
//HELPER FUNCTIONS
//Function to populate dropdown with pokemon names
function BuildPokemonSelectOptions(pokemonOptions){
  pokemonOptions.forEach(element => {
      let option = document.createElement("option"); //Create option element
      option.innerHTML = element.name; //Set displayed text to pokemon name
      option.value = element.name; //Set option value to pokemon name
      selectPokemon.appendChild(option); //Append option to dropdown
  });
}

//Function to fetch a pokemon's data based on its name
function GetOnePokemon(pokemon){
fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon) //Fetch data from API
  .then(response => response.json()) //Convert response to JSON
  .then(data => {
    //BuildAbilitiesList(data.abilities);
    SetCurrentSelection(data);
    ShowSelectionImages(data.sprites);
    DisplayStatsAndTypes(data.types, data.stats);
})
  .catch(error => console.error('Error:', error)); // Catch and log any errors
}

//Function to store data in current selection object
function SetCurrentSelection(data) {
  currentSelection.sprite = data.sprites.front_default;
  currentSelection.types = data.types;
  currentSelection.stats = data.stats;
  console.log(currentSelection);
}

//Function to display pokemon image
function ShowSelectionImages(sprites){
  imageContainer.innerHTML = ""; //Clear previous image
  let image = document.createElement("img"); //Create image element
  image.src = sprites.front_default; //Set image source to front sprite
  imageContainer.appendChild(image); //Append image to container
}

//Function to build and display stats and types
function DisplayStatsAndTypes(types, stats) {
  statsContainer.innerHTML = ""; // Clear previous stats

  // Display Types
  let typesHeader = document.createElement("h3");
  typesHeader.textContent = "Type(s):";
  statsContainer.appendChild(typesHeader);

  let typesList = document.createElement("ul");
  types.forEach(type => {
    let typeItem = document.createElement("li");
    typeItem.textContent = type.type.name;
    typesList.appendChild(typeItem);
  });
  statsContainer.appendChild(typesList);

  // Display Base Stats
  let statsHeader = document.createElement("h3");
  statsHeader.textContent = "Base Stats:";
  statsContainer.appendChild(statsHeader);

  let statsList = document.createElement("ul");
  stats.forEach(stat => {
    let statItem = document.createElement("li");
    statItem.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
    statsList.appendChild(statItem);
  });
  statsContainer.appendChild(statsList);
}

/*Function to build and display abilities list
function BuildAbilitiesList(abilities){
  abilitiesUL.innerHTML = "" //Clear existing list
  abilities.forEach(element => {
  let li = document.createElement("li"); //Create list item
  li.innerHTML = element.ability.name; //Set list item text to ability name
  abilitiesUL.appendChild(li); //Append list item to UL
  });
}*/

