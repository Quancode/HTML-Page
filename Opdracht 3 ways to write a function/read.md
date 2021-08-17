# 3 manieren om een functie te verklaren

## ------------ 1 function decleration----------------(komt overeen met 2)
het verklaren van een functie. Zonder semicolon

function sayHello() { // function decleration
    console.log(" Hello 1"); //body of the function
}
//oproepen van de functie
sayHello();


vb:
function add(number1, number2) {
    return number1 + number2;
}

add(5, 6); // 11



## ------------ 2 function expression----------------(komt overeen met 1)
//alles vanaf 'function' is een expression, dat is gegeven aan de waarde(variabele) 'sayHello'. 

const sayHello = function () { // de function begint vanaf de "function()"
    console.log("Hello 2");
};

//of
const age = 18;
// '18' is de expressie en die zetten we in de variabel 'age'.

//oproepen van de functie
sayHello();

vb:
const add = function (number1, number2) {
    return number1 + number2;
};

add(5, 6); // 11



## ------------ 3 arrow function (also a function expression)----------------
// je schrijft de functies op een korte compacte manier.

const sayHello = () => { // de function begint vanaf de () -- 0 argument
    console.log("Hello 3");
};

//oproepen van de functie
sayHello();


vb:
const add = (number1, number2) => { // 2 arguments
    return number1 + number2;
};
add(5, 6); // 11

//If an arrow function has 1 argument you can skip the parentheses and it looks like this:

const square = number => {
  return number * number;
};

We can sometimes skip the curly braces and the return keyword when writing an arrow function to make the syntax even more compact. We can only do this if:

there's only one statement in the "body" of the function
we want the evaluated value of that statement to be the value the function returns
However: this shorter syntax can decrease readability and ease of debugging, so don't overuse it.

const add2 = (number1, number2) => number1 + number2;

add2(5, 6); // 11