
/*let sluts = ["Joe", "Chloe"];
document.addEventListener("DOMContentLoaded", document.getElementById("sluts").innerHTML = sluts);

function addSlut () {
    let newSlut = document.getElementById("new-slut").value;
    sluts.push(newSlut)
    document.getElementById("sluts").innerHTML = sluts
}*/

function countApples () {
let apple = Number(document.getElementById("first").value);
let apple2 = Number(document.getElementById("second").value);
let result = apple + apple2;
returnResult(result) ;
}

function subtraction () {
    let apple = Number(document.getElementById("first").value);
    let apple2 = Number(document.getElementById("second").value);
    let result = apple - apple2;
    returnResult(result) ;
    }


function multiplication () {
    let apple = Number(document.getElementById("first").value);
    let apple2 = Number(document.getElementById("second").value);
    let result = apple * apple2;
    returnResult(result) ;
    }
function division () {
    let apple = Number(document.getElementById("first").value);
    let apple2 = Number(document.getElementById("second").value);
    let result = apple / apple2;
    returnResult(result)  ;
        }

function power () {
    let apple = Number(document.getElementById("first").value);
    let apple2 = Number(document.getElementById("second").value);
    let result = apple ** apple2;
    returnResult(result)
                }
            
function percent() {
    let apple = Number(document.getElementById("first").value);
    let apple2 = Number(document.getElementById("second").value);
    let result =  (apple2 * apple) / 100;
    returnResult(result)
        
}

function returnResult(result) {
    document.querySelector(".result").innerHTML = result
}
   
let activated = false;

function showListOfColor(){
    
    if (activated === false) {
    document.getElementById("color-selection").style.transform = "translateY(-192px)";
    activated = true;
    } else {
    document.getElementById("color-selection").style.transform = "translateY(0px)";
    activated = false;
    }

    }
    
function changeTheColorToPink() {
    let allButton = document.querySelectorAll("button")
    let button = document.querySelector("button")
    for(let button of allButton) {
        button.classList.add("pink-button")
    }
    let allInput = document.querySelectorAll("input")
    let input = document.querySelector("input")
    for(let input of allInput) {
        input.classList.add("pink-input")
    }
    let allResult = document.querySelectorAll(".result")
    let result = document.querySelector(".result")
    for(let result of allResult) {
        result.classList.add("pink-result")
    }
    let allHead = document.querySelectorAll(".head")
    let head = document.querySelector(".head")
    for(let head of allHead) {
        head.classList.add("pink-head")
    }
    document.querySelector("body").style.backgroundColor = "rgb(238, 131, 220)";
}

function changeTheColorToBlue() {
    let allButton = document.querySelectorAll("button")
    let button = document.querySelector("button")
    for(let button of allButton) {
        button.classList.add("blue-button")
    }
    let allInput = document.querySelectorAll("input")
    let input = document.querySelector("input")
    for(let input of allInput) {
        input.classList.add("blue-input")
    }
    let allResult = document.querySelectorAll(".result")
    let result = document.querySelector(".result")
    for(let result of allResult) {
        result.classList.add("blue-result")
    }
    let allHead = document.querySelectorAll(".head")
    let head = document.querySelector(".head")
    for(let head of allHead) {
        head.classList.add("blue-head")
    }
    document.querySelector("body").style.backgroundColor = "rgb(127, 127, 247)";
}


function changeTheColorToGreen() {
    let allButton = document.querySelectorAll("button")
    let button = document.querySelector("button")
    for(let button of allButton) {
        button.classList.add("green-button")
    }
    let allInput = document.querySelectorAll("input")
    let input = document.querySelector("input")
    for(let input of allInput) {
        input.classList.add("green-input")
    }
    let allResult = document.querySelectorAll(".result")
    let result = document.querySelector(".result")
    for(let result of allResult) {
        result.classList.add("green-result")
    }
    let allHead = document.querySelectorAll(".head")
    let head = document.querySelector(".head")
    for(let head of allHead) {
        head.classList.add("green-head")
    }
    document.querySelector("body").style.backgroundColor = "rgb(117, 189, 45)";
}



/*
function checkIn(){
let name = document.getElementById("name").value;
let surname = document.getElementById("surname").value;
let age = document.getElementById("age").value;
let result = name + ' ' + surname + ' ' + age;
alert(`Ваши данные ${result} года! Добро пожаловать!`)
}*/