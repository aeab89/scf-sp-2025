let vehicles = [
    {
        type: "crossover suv",
        color: "yellow",
        tire: "Goodyear",
        make: "Toyota",
        model: "Rav 4"
    },
    {
        type: "truck",
        color: "red",
        tire: "Goodyear",
        make: "Toyota",
        model: "Tacoma"
    }
];

const carSelectorElement = document.getElementById("CarSelector");
carSelectorElement.innerHTML = "";

for(i = 0; i < vehicles.length; i++){
    let option = document.createElement("option");
    option.text = vehicles[i].model;
    option.value = vehicles[i].model.trim();
    
    carSelectorElement.appendChild(option);
}
