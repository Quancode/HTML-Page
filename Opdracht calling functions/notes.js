
//--------------calling a function within a function--------------

//defining a function
const scream = function () {
    console.log("Aaaaaaaah");
};

//calling scream outside of a function
scream();


// Here we call scream inside of a function
const makeNoise = function () {
    scream();
};

makeNoise();

//--------------------Returning a value------------------

//defining the function <-- hier is berekening, of de som
const add = function (numberA, numberB) {
    return numberA + numberB; //sum variables
    //returning betekent terug gaan naar de plek where the function was called. 
};

const doCalculations = function () { // <--hier geef je je som waardes 
    //the add function returns to this lane
    const eight = add(2, 4); //<-- hier gaat ie terug naar Return om de waardes te berekenen
    console.log(eight);
    // als er hier geen waardes meer zijn dan stopt de functie hier en gaat ie de function callen, dus berekenen. 
    // JS gaat dan verder naar beneden. 
};

//calling the function <--- hier zeg je, bereken de som. 
doCalculations();


///-----------Debugging met console.log---------

//defining a function
/*const makePositive = function (number) {
    console.log("Entering makePositive..", number); // kan ook de value 'number' console.log op deze manier loggen (zonder regel)
    console.log(number); // door de value number te loggen kan je zien wat de uitkomst is waardoor je nog beter kan debuggen. Let op niet """ gebruiken want dan schrijf je gewoon een tekst.
    if (number < 0) { // of deze weg (simpeler)
        return Math.abs(number);
    }
    return number;
};
*/
//voorbeeld in input waarde en resultaat waarde te lateb zien in de console (dus volledige berekening)
const makePositive = function (number) {
    console.log("Entering makePositive..");
    console.log("Input:", number);
    const result = Math.abs(number);
    console.log("Output:", result);
    return result;
};


//defining a function
const makeBigger = function (number) {
    console.log("Entering makeBigger..");
    console.log(number);
    if (number < 10) {
        return 10 + number;
    }
    return number;
};

//defining a function
const square = function (number) {
    console.log("Entering square..");
    console.log(number);
    return number * number;
};

//defining a function 4x
const doComplexCalculation = function (number) { //dit is de eerste functie definitie
    console.log("Entering doComplexCalculation..");
    console.log(number);
    const positiveNumber = makePositive(number);  //dit is de tweede functie definitie
    const bigNumber = makeBigger(positiveNumber);  //dit is de derde functie definitie
    const squaredNumber = square(bigNumber);  //dit is de 4e functie definitie
    return squaredNumber;
};

//calling the function
console.log(doComplexCalculation(-1));