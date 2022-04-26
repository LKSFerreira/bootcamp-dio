const jogador = document.querySelector(".jogador");
const playArea = document.querySelector("#main-play-area");
const aliensImg = ["img/monster-1.png", "img/monster-2.png", "img/monster-3.png", "img/monster-4.png", "img/monster-5.png", "img/monster-6.png", "img/monster-7.png", "img/monster-8.png", "img/monster-9.png"];
const instructionsText = document.querySelector(".game-instructions");
const startButton = document.querySelector(".start-button");
let alienInterval;

// Movimento e tiro da nave
function FlyShip(event) {
    if (event.key === "w") {
        event.preventDefault();
        moveUP();
    } else if (event.key === "s") {
        event.preventDefault();
        moveDown();
    } else if (event.key === "d") {
        event.preventDefault();
        fireLaser();
    }
}

// Função SOBE
function moveUP() {
    let topPosition = getComputedStyle(jogador).getPropertyValue("top");
    if (topPosition === "5px") {
        return;
    } else {
        let position = parseInt(topPosition);
        position -= 35;
        jogador.style.top = `${position}px`
    };
}

// Função DESCE
function moveDown() {
    let topPosition = getComputedStyle(jogador).getPropertyValue("top");
    if (topPosition === "530px") {
        return;
    } else {
        let position = parseInt(topPosition);
        position += 35;
        jogador.style.top = `${position}px`
    };
}

// Função ATIRA
function fireLaser() {
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser(laser);
}

// Função cria o efeito de Laser
function createLaserElement(laser) {
    let xPosition = parseInt(window.getComputedStyle(jogador).getPropertyValue("left"));
    let yPosition = parseInt(window.getComputedStyle(jogador).getPropertyValue("top"));
    let newLaser = document.createElement("img");
    newLaser.src = "img/shoot.png";
    newLaser.classList.add("laser");
    newLaser.style.left = `${xPosition - 35}px`
    newLaser.style.top = `${yPosition - 20}px`
    return newLaser;
}

function moveLaser(laser) {
    let laserInterval = setInterval(() => {
        let xPosition = parseInt(laser.style.left);
        let aliens = document.querySelectorAll(".alien");

        aliens.forEach((alien) => { // compara se cada alien foi atingo, se sim, troca a src da imagem
            if (checkLaserCollision(laser, alien)) {
                alien.src = "img/explosion.png";
                alien.classList.remove("alien");
                alien.classList.add("dead-alien");
            }

        })

        if (xPosition >= 480) {
            laser.remove();

        } else {
            laser.style.left = `${xPosition + 5}px`;
        }
    }, 10);
}

// Função cria Aliens
function createAliens() {
    let novoAlien = document.createElement("img");
    let alienSprite = aliensImg[Math.floor(Math.random() * aliensImg.length)]; //sorteia imagem dos aliens
    novoAlien.src = alienSprite;
    novoAlien.classList.add("alien");
    novoAlien.classList.add("alien-transition");
    novoAlien.style.left = "370px";
    novoAlien.style.top = `${Math.floor(Math.random() * 330 + 40)}px`;
    playArea.appendChild(novoAlien);
    moveAlien(novoAlien);
}

// Função para mover alien
function moveAlien(alien) {
    let moveAlienInterval = setInterval(() => {
        let xPosition = parseInt(window.getComputedStyle(alien).getPropertyValue('left'));
        if (xPosition <= 50) {
            if (Array.from(alien.classList).includes("dead-alien")) {
                alien.remove();
            } else {
                gameOver();
            }
        } else {
            alien.style.left = `${xPosition - 2}px`
        }
    }, 20);
}

//Função colisão
function checkLaserCollision(laser, alien) {
    let laserTop = parseInt(laser.style.top);
    let laserLeft = parseInt(laser.style.left);
    let laserBotton = laserTop - 20;
    let alienTop = parseInt(alien.style.top);
    let alienLeft = parseInt(alien.style.left);
    let alienBotton = alienTop - 30;
    if (laserLeft != 340 && laserLeft + 40 >= alienLeft) {
        if (laserTop <= alienTop && laserTop >= alienBotton) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}
startButton.addEventListener("click", (event) => {
    playGame();
});

// Inicia o jogo
function playGame() {
    startButton.style.display = "none";
    instructionsText.style.display = "none";
    window.addEventListener("keydown", FlyShip);
    alienInterval = setInterval(() => {
        createAliens();
    }, 2000);
}



// Função Game Over
function gameOver() {
    window.removeEventListener("keydown", FlyShip);
    clearInterval(alienInterval);
    let aliens = document.querySelectorAll(".alien");
    aliens.forEach((alien) => alien.remove());
    let lasers = document.querySelectorAll(".laser");
    lasers.forEach((laser) => laser.remove());
    setTimeout(() => {
        alert("Game Over!");
        jogador.style.top = "250px";
        startButton.style.display = "block";
        instructionsText.style.display = "block";
        return;
    });


}