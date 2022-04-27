const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
const pontuacao = document.querySelector(".pontuacao")
let isJumping = false;
let dificuldade = 7000;
let yPosition = 0;
let score = 0;

function handleKeyUp(event) {
    if (event.key === " ") {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (yPosition >= 160) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (yPosition <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                yPosition -= 2; // codigo desce dino
                dino.style.bottom = yPosition + "px";
                if (yPosition <= 0) {
                    dino.style.bottom = "0px";
                }

            }, 1);

        } else {
            yPosition += 2; // codigo sobe dino
            dino.style.bottom = yPosition + "px";
        }
    }, 1);
}

function restart() {
    location.reload();
}

function calculaScore() {
    score += 123;

}

pontuacao.innerHTML = `Pontos: ${score}`;

function createCactus() {

    const cactus = document.createElement("div");
    let xPosition = 1000;
    let tempoRandom = Math.random() * dificuldade;

    cactus.classList.add("cactus");
    cactus.style.left = 1000 + "px";
    background.appendChild(cactus);

    let letInterval = setInterval(() => {

        if (xPosition <= - 60) {
            clearInterval(letInterval);
            background.removeChild(cactus);
            calculaScore();
            pontuacao.innerHTML = `Pontos: ${score}`;
        } else if (xPosition > 0 && xPosition < 60 && yPosition < 60) {
            //gameOver();
            clearInterval(letInterval);
            document.body.innerHTML = `'<h1 class="game-over">Fim de Jogo<br><br>Sua pontuação: ${score}<br><br>Clique aqui para jogar novamente</h1>'`;
            const reload = document.querySelector(".game-over");
            reload.addEventListener("click", restart);
        } else {
            xPosition -= 10;
            cactus.style.left = xPosition + "px";
        }
    }, 20);

    setTimeout(() => {
        createCactus();
        if (dificuldade < 1000) {
            return;
        } else {
            dificuldade = dificuldade - 100;
        }

    }, tempoRandom);
    console.log(dificuldade);
}

createCactus();
document.addEventListener("keypress", handleKeyUp);