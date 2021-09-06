//opdracht 1
//1. Gebruik een click event en "attach" het click event aan de button
//2. Geef een alert: "button clicked
//3 click event
//4. Wanneer er op de change-background-button geklikt wordt ga je de class "red-background" toevoegen aan je body element. 


document.getElementById('mybutton').onclick = function changeContent() { //1
    document.getElementById('mybutton').textContent = "button clicked"; //2
}
console.log(mybutton)
