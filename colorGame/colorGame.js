function randomColor(steps) {
    let level = 256/steps;
    return "rgb("+Math.floor(Math.random()*level)*steps+", "+Math.floor(Math.random()*level)*steps+", "+Math.floor(Math.random()*level)*steps+")"
}
function genColor(number) {
    let result = [];
    for (let i = 0; i<number; i++) {
        result.push(randomColor(colorsteps));
    }
    return result;
}

const nsquares=6;

let ncolors=6;
let domNcolors = document.querySelector("#Nsquares");
function handlerNcolors () {
    ncolors = domNcolors.options[domNcolors.selectedIndex].value;
    initGame();
}

let colorsteps=4;
let domColorSteps = document.querySelector("#ColorSteps");
function handlerColorSteps () {
    colorsteps = domColorSteps.options[domColorSteps.selectedIndex].value;
    initGame();
}

let domColorDisplay = document.querySelector("#colorDisplay");
let domSquares = document.querySelectorAll(".square");

let targetColorN = Math.floor(Math.random()*ncolors);
let targetColorRGB = "";

function initGame() {
    document.querySelector("#header").style.backgroundColor = "";
    document.querySelector("#message").innerHTML = "Click your guess!";
    targetColorN = Math.floor(Math.random()*ncolors);
    let colors = genColor(ncolors);
    for (let i = 0; i<nsquares; i++) {
        if (i<ncolors) {
            domSquares[i].removeEventListener("click", clickHide);
            domSquares[i].removeEventListener("click", clickWinner);
            domSquares[i].style.visibility = "visible";
            domSquares[i].style.backgroundColor = colors[i];
            if (i===targetColorN) {
                targetColorRGB = colors[i];
                domColorDisplay.innerHTML = targetColorRGB;
                domSquares[i].addEventListener("click", clickWinner);
            } else {
                domSquares[i].addEventListener("click", clickHide);
            }
        } else {
            domSquares[i].style.backgroundColor = "transparent";   
            domSquares[i].style.visibility = "hidden";
        }
    }
}

function clickHide() {
    this.style.backgroundColor = "transparent";   
    document.querySelector("#message").innerHTML = "Try again!";
}
function clickWinner() {
    document.querySelector("#message").innerHTML = "That's Right!";
    document.querySelector("#header").style.backgroundColor = domColorDisplay.innerHTML;
    for (let i = 0; i<nsquares; i++) {
        if (i<ncolors) {
            domSquares[i].removeEventListener("click", clickHide);
            domSquares[i].removeEventListener("click", clickWinner);
            domSquares[i].style.backgroundColor = targetColorRGB;
        }        
    }
}

setTimeout(initGame,1500);
