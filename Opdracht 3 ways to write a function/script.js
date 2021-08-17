//------------function decleration-----------

const add = function (number1, number2) {
    return number1 + number2;
    console.log(" add");
};
add(5, 6); // 11



function doSquareCalculation(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};

//----------- function expression--------


const add = (number1, number2) => { // 2 arguments
    return number1 + number2;
    console.log(" add");
};
add(5, 6); // 11

const doSquareCalculation = function (number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};


//Using a helper function

//We can use a helper function to make our code more readable.

const square = function (number) {
    return number * number;
};

const doSquareCalculation = function (number1, number2) {
    return square(square(number1) + square(number2));
};

//This solution uses fewer steps, but is a little harder to read.

const doSquareCalculation = function (number1, number2) {
    const sum = number1 * number1 + number2 * number2;
    return sum * sum;
};
//------------ 3 arrow function----------


const add2 = (number1, number2) => number1 + number2;
console.log(" add");

add(5, 6); // 11



const doSquareCalculation = (number1, number2) => {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};
//The shorter version

//This solution uses fewer steps, but is a little harder to read.

const doSquareCalculation = (number1, number2) => {
    const sum = number1 * number1 + number2 * number2;
    return sum * sum;
};

//Using a helper function

//We can use a helper function to make our code more readable. This also allows us to have only one statement in the body of the function so we can drop the curly braces and the return keyword. As you can see this code is very dense, but still quite readable.

const square = number => number * number;

const doSquareCalculation = (number1, number2) =>
    square(square(number1) + square(number2));