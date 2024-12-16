let currPirata2Tile;   
let currTesoro2Tile;
let currHuesitoTile;

let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
    createRestartButton();
}
function setGame() {  
    for (let i = 0; i<9; i++) {  
    
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile); 
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setPirata2, 1000); //tiempo en aparecer las imágenes
    setInterval(setTesoro2, 1000);
    setInterval(setHuesito, 1000);
}

function getRandomTile() {
    
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setPirata2() {
    if (gameOver) {
        return;
    }
    if (currPirata2Tile) {                
        currPirata2Tile.innerHTML = "";
    }
    let pirata2 = document.createElement("img"); 
    pirata2.src = "./img/pirata2.png";

    let num = getRandomTile();
    if (currTesoro2Tile && currTesoro2Tile.id == num) {
        return;
    }
    if(currHuesitoTile && currHuesitoTile.id == num) {
        return;
    }
    currPirata2Tile = document.getElementById(num);
    currPirata2Tile.appendChild(pirata2);  
}
function setHuesito() {
    if (gameOver) {
        return;
    }
    if (currHuesitoTile) {                
        currHuesitoTile.innerHTML = "";
    }
    let huesito = document.createElement("img"); 
    huesito.src = "./img/huesito.png";
    let num = getRandomTile();
    if (currTesoro2Tile && currTesoro2Tile.id == num) {
        return;
    }
    if(currPirata2Tile && currPirata2Tile.id == num) {
        return;
    }
    currHuesitoTile = document.getElementById(num);
    currHuesitoTile.appendChild(huesito);  
}
function setTesoro2() {
    if (gameOver) {
        return;
    }
    if (currTesoro2Tile) {
        currTesoro2Tile.innerHTML = "";
    }
    let tesoro2 = document.createElement("img");
    tesoro2.src = "./img/Tesoro2.png";
    let num = getRandomTile();
    if(currPirata2Tile && currPirata2Tile.id == num) {
        return;
    }
    if(currHuesitoTile && currHuesitoTile.id == num) {
        return;
    }
    currTesoro2Tile = document.getElementById(num);
    currTesoro2Tile.appendChild(tesoro2);
}
function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currTesoro2Tile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); 
    }
    if (this == currPirata2Tile) {
        score -= 10;
        document.getElementById("score").innerText = score.toString(); 
    }
    else if (this == currHuesitoTile) {   
    document.getElementById("score").innerText = "GAME OVER: " + score.toString();
    gameOver = true;
    document.getElementById("restartButton").style.display="block";//Muestra botón de reinicio
}
function createRestartButton() {
    let button = document.createElement("button");
    button.id = "restartButton";
    button.innerText = "Restart Game";
    button.style.display = "none"; // Oculta el botón inicialmente
    button.addEventListener("click", restartGame);
    document.body.appendChild(button);
}
function restartGame() {
    score = 0;
    gameOver = false;
    document.getElementById("score").innerText = score.toString();
    document.getElementById("restartButton").style.display = "none"; // Oculta el botón de reinicio
    setGame();
}
}
