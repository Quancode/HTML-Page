let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    
    document.getElementById("home").style.backgroundColor = "transparant";
    document.getElementById("red").style.backgroundColor = "red";
    document.getElementById("orange").style.backgroundColor = "orange";
    document.getElementById("purple").style.backgroundColor = "purple";
    document.getElementById("green").style.backgroundColor = "green";


if (toggleNavStatus === false){
    getSidebarUl.style.visibility == "visible";
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;
    for (let i =  0; i < arrayLength; i++) {
       getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
}

else if (toggleNavStatus === true){
    
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;
    for (let i =  0; i < arrayLength; i++) {
       getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility == "hidden";

    toggleNavStatus = false;
}

}