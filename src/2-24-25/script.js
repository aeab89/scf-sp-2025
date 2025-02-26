let vehicles = [
    { type: "crossover suv", color: "yellow", tire: "Goodyear", make: "Toyota", model: "Rav 4" },
    { type: "truck", color: "red", tire: "Goodyear", make: "Toyota", model: "Tacoma" },
    { type: "sedan", color: "blue", tire: "Michelin", make: "Honda", model: "Accord" },
    { type: "suv", color: "black", tire: "Bridgestone", make: "Ford", model: "Explorer" },
    { type: "truck", color: "green", tire: "Goodyear", make: "Chevrolet", model: "Silverado" },
    { type: "sedan", color: "white", tire: "Pirelli", make: "BMW", model: "3 Series" },
    { type: "sports car", color: "red", tire: "Continental", make: "Ferrari", model: "488 GTB" },
    { type: "minivan", color: "silver", tire: "Goodyear", make: "Chrysler", model: "Pacifica" },
    { type: "convertible", color: "yellow", tire: "Michelin", make: "Porsche", model: "911" },
    { type: "hatchback", color: "blue", tire: "Bridgestone", make: "Volkswagen", model: "Golf" },
    { type: "suv", color: "gray", tire: "Goodyear", make: "Jeep", model: "Grand Cherokee" },
    { type: "pickup", color: "black", tire: "Firestone", make: "Ram", model: "1500" },
    { type: "wagon", color: "brown", tire: "Pirelli", make: "Subaru", model: "Outback" },
    { type: "electric", color: "white", tire: "Michelin", make: "Tesla", model: "Model S" },
    { type: "luxury", color: "gold", tire: "Continental", make: "Lexus", model: "LS" },
    { type: "coupe", color: "red", tire: "Goodyear", make: "Mercedes", model: "C-Class Coupe" },
    { type: "crossover", color: "purple", tire: "Bridgestone", make: "Nissan", model: "Rogue" },
    { type: "hybrid", color: "green", tire: "Pirelli", make: "Toyota", model: "Prius" },
    { type: "diesel", color: "gray", tire: "Firestone", make: "Chevrolet", model: "Colorado" },
    { type: "muscle car", color: "orange", tire: "Continental", make: "Dodge", model: "Challenger" },
    { type: "supercar", color: "blue", tire: "Pirelli", make: "Lamborghini", model: "Huracan" },
    { type: "suv", color: "black", tire: "Goodyear", make: "Cadillac", model: "Escalade" },
    { type: "roadster", color: "silver", tire: "Bridgestone", make: "Mazda", model: "MX-5 Miata" },
    { type: "luxury sedan", color: "white", tire: "Michelin", make: "Audi", model: "A8" },
    { type: "compact", color: "blue", tire: "Firestone", make: "Hyundai", model: "Elantra" },
    { type: "electric", color: "red", tire: "Pirelli", make: "Rivian", model: "R1T" },
    { type: "sports sedan", color: "black", tire: "Continental", make: "Alfa Romeo", model: "Giulia" },
    { type: "performance suv", color: "green", tire: "Bridgestone", make: "Maserati", model: "Levante" },
    { type: "exotic", color: "gold", tire: "Michelin", make: "McLaren", model: "720S" },
    { type: "classic", color: "blue", tire: "Pirelli", make: "Ford", model: "Mustang 1967" },
    { type: "off-road", color: "gray", tire: "Firestone", make: "Land Rover", model: "Defender" },
    { type: "touring", color: "silver", tire: "Goodyear", make: "Bentley", model: "Continental GT" },
    { type: "city car", color: "yellow", tire: "Bridgestone", make: "Smart", model: "Fortwo" },
    { type: "family car", color: "white", tire: "Pirelli", make: "Honda", model: "Odyssey" },
    { type: "electric luxury", color: "black", tire: "Michelin", make: "Lucid", model: "Air" },
    { type: "off-road", color: "brown", tire: "Firestone", make: "Jeep", model: "Wrangler" },
    { type: "commercial", color: "white", tire: "Goodyear", make: "Ford", model: "Transit" },
    { type: "sports wagon", color: "gray", tire: "Bridgestone", make: "Volvo", model: "V60" },
    { type: "hot hatch", color: "blue", tire: "Pirelli", make: "Honda", model: "Civic Type R" },
    { type: "ultra-luxury", color: "gold", tire: "Continental", make: "Rolls-Royce", model: "Phantom" },
    { type: "high-performance", color: "black", tire: "Michelin", make: "Bugatti", model: "Chiron" },
    { type: "racing", color: "red", tire: "Firestone", make: "Ferrari", model: "F1 Car" },
    { type: "hypercar", color: "purple", tire: "Michelin", make: "Koenigsegg", model: "Jesko" },
    { type: "convertible sports", color: "blue", tire: "Bridgestone", make: "Chevrolet", model: "Corvette" },
    { type: "eco-friendly", color: "green", tire: "Pirelli", make: "Hyundai", model: "Ioniq 5" },
    { type: "adventure", color: "orange", tire: "Goodyear", make: "Subaru", model: "Crosstrek" }
];

const carSelectorElement = document.getElementById("CarSelector");
carSelectorElement.innerHTML = "";

const carInfoDisplay = document.getElementById("CarInfo")
const makeModelDisplay = document.getElementById("MakeModel");
const carDetailDisplay = document.getElementById("CarDetails");
const searchCarElement = document.getElementById("SearchButton");
const resultDisplay = document.getElementById("ResultDisplay");


for(i = 0; i < vehicles.length; i++){
    let option = document.createElement("option");
    option.text = vehicles[i].model;
    option.value = i;

    carSelectorElement.appendChild(option);
}

/* How I originally had the code for the carSelectorElement before chatGPT's suggestions.
carSelectorElement.addEventListener("change", (event) => {
    resultDisplay.innerHTML = "";

    let message = vehicles[event.target.value].make + " " + vehicles[event.target.value].model;
    makeModelDisplay.innerText = message;

    let listItems = 
        "Type: " + vehicles[event.target.value].type + "\n" +
        "Color: " + vehicles[event.target.value].color + "\n" +
        "Tire: " + vehicles[event.target.value].tire + "\n";
    carDetailDisplay.innerText = listItems;    
});*/

carSelectorElement.addEventListener("change", (event) => {
    resultDisplay.innerHTML = "";
    let selectedIndex = event.target.value;
    let selectedVehicle = vehicles[selectedIndex];

    if (selectedVehicle) {
        carDetailDisplay.innerText =
            `Make: ${selectedVehicle.make}\n` +
            `Model: ${selectedVehicle.model}\n` +
            `Type: ${selectedVehicle.type}\n` +
            `Color: ${selectedVehicle.color}\n` +
            `Tire: ${selectedVehicle.tire}\n`;
    } 
});

searchCarElement.addEventListener("click", (event) => {
    event.preventDefault();
    
    let searchValue = document.getElementById("CarInput").value.trim().toLowerCase();
    let foundVehicles = vehicles.filter(vehicle => vehicle.make.toLowerCase() === searchValue);

    if (foundVehicles.length > 0) {
        resultDisplay.innerHTML = "";

        foundVehicles.forEach((vehicle) => {
            let vehicleInfo = document.createElement("p");
            vehicleInfo.innerText =
                `Make: ${vehicle.make}\n` +
                `Model: ${vehicle.model}\n` +
                `Type: ${vehicle.type}\n` +
                `Color: ${vehicle.color}\n` +
                `Tire: ${vehicle.tire}\n` +
                '---------------------------';
            resultDisplay.appendChild(vehicleInfo);
        });
    } else{
        carInfoDisplay.innerHTML = "";
        resultDisplay.innerText = "No vehicle with that make.";
    }
});