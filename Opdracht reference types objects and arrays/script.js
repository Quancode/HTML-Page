
/*
const age = 17;

if (age >= 18) {
    console.log("Je mag naar binnen");
} else {
    console.log("Je mag niet naar binnen. U word vriendelijk verzocht buiten te blijven");
}


//-------------------------------

const isFemale = true;

if (isFemale) {

    console.log("Kom binnen");
}


const driverStatus = "bob";

if (driverStatus === "bob") { //waarde is gelijk aan
    console.log("Jij bent de bob")
} else {
    console.log("Jij mag niet rijden")
}

//---------------------------------------------------


if (age >= 18 && age <= 25) {

    console.log("Je krijgt 50% korting!");
} else {
    console.log("Je krijgt geen korting");
}


const firstName = "ben";

if (firstName === "sarah" || firstName === "bram") {

    console.log("Jij krijgt een gratis biertje!");
} else {
    console.log("Je krijgt sap");
}


const totalAmount = 26;

if (totalAmount >= 100) {

    console.log("Je krijgt  een gratis flesje champagne");
}
else if (totalAmount > 50) {

    console.log("Je krijgt een gratis portie nachos");
} else if (totalAmount > 25) {

    console.log("Je krijgt gratis (vega)bitterballen");
}
*/
//-----------objecten-------------------

let person = {
    name: "Quanita",
    age: 38,
    evaluations: [7, 10, 9],
};
/*console.log(person.evaluations);*/
// de waarde hiervan is 3

// entire object
console.log(person);

// dot notation
console.log(person.name);
console.log(person.age);

// bracket notation
console.log(person["name"]);
console.log(person["age"]);

// extra key-value pair
console.log(person.evaluations);

//-----------Arrays-------------------

const colors = [
    "groen",
    "blauw",
    "rood"];   // aray met strings

console.log(colors);
console.log(colors.length);

// first element
console.log(colors[0]);

// last element
console.log(colors[colors.length - 1]);

// adding elements
colors.push("geel");
console.log(colors);
colors.push(5);
console.log(colors);

// adding an object
colors.push({ greeting: "Hi ik ben een object" });
console.log(colors);

// only the last greeting
console.log(colors[colors.length - 1].greeting);



//-----------Bekijk een real-life object-------------------

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"], //--aray
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"

    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]


console.log("Naam kattensoort 3:", catBreeds[2].name);
console.log("Energylevel kattensoort 1:", catBreeds[0].energy_level);
console.log("Eerste temperament kat 2:", catBreeds[1].temperament[0]);

const lengthTemperamentsCatThree = catBreeds[2].temperament.length;
console.log(
    "Laatste temperament kat 3:",
    catBreeds[2].temperament[lengthTemperamentsCatThree - 1]
);

console.log("Favo voedsel van kat 3:", catBreeds[2].food.favourite_food);


