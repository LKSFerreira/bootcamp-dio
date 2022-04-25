let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

//cria ordem aleatória de cores
let sorteiaNumero = () => {
    let colorOrdem = Math.floor(Math.random() * 4);
    order[order.length] = colorOrdem;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElementor(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
        
    }, number - 250);

    setTimeout(() => {        
        element.classList.remove('selected');
        //alert("Deveria remover depos disso");
    }, number);

}

//verifica se o que foi clicado é igual a ordem gerada aleatoriamente
let checaOrdem = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert("Pontuação: " + score + "\n Voce acertou! Iniciando próximo nível!");
        nextLevel();
    }
}

//funcao para o clique do usuario

let clica = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElementor(color).classList.add("selected");

    setTimeout(() => {
        createColorElementor(color).classList.remove("selected");
        checaOrdem();
    }, 250);

}

//funcao que retorna a cor
let createColorElementor = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else { color == 3 }
    return blue;
}

// funcao proximo level
let nextLevel = () => {
    score = score + 100;
    sorteiaNumero();
}

let gameOver = () => {
    alert("Pontuação: " + score + "\nVoce errou!\nClique em OK para iniciar um novo jogo");
    order = [];
    clickedOrder = [];
    score = 0;

    playGame();
}

//Inicia o jogo
let playGame = () => {
    alert("Bem-vindo ao genius, tente acertar as cores que forem mostrada.")
    score = 0;

    nextLevel();
}

// eventos de clique para as cores
green.onclick = () => clica(0);
red.onclick = () => clica(1);
yellow.onclick = () => clica(2);
blue.onclick = () => clica(3);

// inicio do jogo
playGame();