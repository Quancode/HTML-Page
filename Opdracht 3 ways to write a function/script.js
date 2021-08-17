//------------function decleration-----------

const add = function (number1, number2) {
    return number1 + number2;
    console.log(" add");
};

add(5, 6); // 11


//----------- function expression--------


const add = (number1, number2) => { // 2 arguments
    return number1 + number2;
    console.log(" add");
};
add(5, 6); // 11


//------------ 3 arrow function----------


const add2 = (number1, number2) => number1 + number2;
console.log(" add");

add(5, 6); // 11