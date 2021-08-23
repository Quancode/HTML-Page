/*
const color = [
    "yellow",
    "blue",
    "red",
    "orange"];
console.log("color");

// oude manieren
let i = 0;
while (i < color.length) {
    console.log(color[i]);
    i++;
}

for (let i = 0; i < color.length; i++) {
    console.log(color[i]);
}

//forEach
const color = [
    "yellow",
    "blue",
    "red",
    "orange"];
console.log("color");
*/

color.forEach(element => console.log(element));
//1. de or loop en while nemen 9 regels in beslag
//2. forEach neemt 5 regels in beslag
//3. Ik vind de forEach methode veel makkelijker. Minder code daardoor overzichtelijk.



const color = {
    color1: "yellow",
    color2: "blue",
    color3: "red",
    color4: "orange",
    color5: "pink",
};

for (const key in color) {

    console.log(`${key}: $color[key]}`);
}

