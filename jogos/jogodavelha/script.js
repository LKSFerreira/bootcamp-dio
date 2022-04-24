
const button = document.getElementsByClassName("button")[0];
const quadrados = document.getElementsByClassName("quadrado");
const jogadorSelecionado = document.getElementById("jogador-selecionado");
var jogador = null;
const body = document.getElementsByName("body");
const vencedorSelecionado = document.getElementById("vencedor-selecionado");

mudaJogador("X");

function clicaQuadrado(elemento) {
    console.log("Clicou no quadrado");

    //

    if (elemento.target.innerHTML == "-") {
        if (jogador == "X") {
            elemento.target.innerHTML = jogador;
            elemento.target.style.color = "#000";
            mudaJogador("O")
        } else {
            elemento.target.innerHTML = jogador;
            elemento.target.style.color = "#000";
            mudaJogador("X")
        }
    }

    if (((quadrados[0].innerHTML == "X") && (quadrados[1].innerHTML == "X") && (quadrados[2].innerHTML == "X")) || (quadrados[0].innerHTML == "O") && (quadrados[1].innerHTML == "O") && (quadrados[2].innerHTML == "O")) {
        
        quadrados[0].classList.add("venceu")
        quadrados[1].classList.add("venceu")
        quadrados[2].classList.add("venceu")

         if (jogador != "X") {
            jogador = "X"
            vencedorSelecionado.innerHTML = jogador;
        } else {
            jogador = "O"
            vencedorSelecionado.innerHTML = jogador;
        }
        
        return;

    }
    if (((quadrados[3].innerHTML == "X") && (quadrados[4].innerHTML == "X") && (quadrados[5].innerHTML == "X")) || (quadrados[3].innerHTML == "O") && (quadrados[4].innerHTML == "O") && (quadrados[5].innerHTML == "O")) {
       
        quadrados[3].classList.add("venceu")
        quadrados[4].classList.add("venceu")
        quadrados[5].classList.add("venceu")

        vencedorSelecionado.innerHTML = jogador;

        if (jogador != "X") {
            jogador = "X"
            vencedorSelecionado.innerHTML = jogador;
        } else {
            jogador = "O"
            vencedorSelecionado.innerHTML = jogador;
        }
        
        return;

    }
    if (((quadrados[6].innerHTML == "X") && (quadrados[7].innerHTML == "X") && (quadrados[8].innerHTML == "X")) || (quadrados[6].innerHTML == "O") && (quadrados[7].innerHTML == "O") && (quadrados[8].innerHTML == "O")) {

        quadrados[6].classList.add("venceu")
        quadrados[7].classList.add("venceu")
        quadrados[8].classList.add("venceu")

        if (jogador != "X") {
            jogador = "X"
            vencedorSelecionado.innerHTML = jogador;
        } else {
            jogador = "O"
            vencedorSelecionado.innerHTML = jogador;
        }
        
        return;
    }
    if (((quadrados[0].innerHTML == "X") && (quadrados[3].innerHTML == "X") && (quadrados[6].innerHTML == "X")) || (quadrados[0].innerHTML == "O") && (quadrados[3].innerHTML == "O") && (quadrados[6].innerHTML == "O")) {

        quadrados[0].classList.add("venceu")
        quadrados[3].classList.add("venceu")
        quadrados[6].classList.add("venceu")

        if (jogador != "X") {
            jogador = "X"
            vencedorSelecionado.innerHTML = jogador;
        } else {
            jogador = "O"
            vencedorSelecionado.innerHTML = jogador;
        }
        
        return;
    }
    if (((quadrados[1].innerHTML == "X") && (quadrados[4].innerHTML == "X") && (quadrados[7].innerHTML == "X")) || (quadrados[1].innerHTML == "O") && (quadrados[4].innerHTML == "O") && (quadrados[7].innerHTML == "O")) {
        quadrados[1].classList.add("venceu")
        quadrados[4].classList.add("venceu")
        quadrados[7].classList.add("venceu")

        if (jogador != "X") {
            jogador = "X"
            vencedorSelecionado.innerHTML = jogador;
        } else {
            jogador = "O"
            vencedorSelecionado.innerHTML = jogador;
        }
        
        return;

    }
    if (((quadrados[2].innerHTML == "X") && (quadrados[5].innerHTML == "X") && (quadrados[8].innerHTML == "X")) || (quadrados[2].innerHTML == "O") && (quadrados[5].innerHTML == "O") && (quadrados[8].innerHTML == "O")) {

        quadrados[2].classList.add("venceu")
        quadrados[5].classList.add("venceu")
        quadrados[8].classList.add("venceu")

        if (jogador != "X") {
            jogador = "X"
            vencedorSelecionado.innerHTML = jogador;
        } else {
            jogador = "O"
            vencedorSelecionado.innerHTML = jogador;
        }
        
        return;
    }
    if (((quadrados[0].innerHTML == "X") && (quadrados[4].innerHTML == "X") && (quadrados[8].innerHTML == "X")) || (quadrados[0].innerHTML == "O") && (quadrados[4].innerHTML == "O") && (quadrados[8].innerHTML == "O")) {

        quadrados[0].classList.add("venceu")
        quadrados[4].classList.add("venceu")
        quadrados[8].classList.add("venceu")

        if (jogador != "X") {
            jogador = "X"
            vencedorSelecionado.innerHTML = jogador;
        } else {
            jogador = "O"
            vencedorSelecionado.innerHTML = jogador;
        }
        
        return;
        
    }
    if (((quadrados[2].innerHTML == "X") && (quadrados[4].innerHTML == "X") && (quadrados[6].innerHTML == "X")) || (quadrados[2].innerHTML == "O") && (quadrados[4].innerHTML == "O") && (quadrados[6].innerHTML == "O")) {

        
        quadrados[2].classList.add("venceu")
        quadrados[4].classList.add("venceu")
        quadrados[6].classList.add("venceu")

        if (jogador != "X") {
            jogador = "X"
            vencedorSelecionado.innerHTML = jogador;
        } else {
            jogador = "O"
            vencedorSelecionado.innerHTML = jogador;
        }
        
        return;
    }

    return
}

function clicaBotao() {
    console.log("clicou no botão");
    location.reload();
}

function mudaJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;

}

button.addEventListener("click", clicaBotao);


for (indice = 0; indice <= quadrados.length; indice++) {
    quadrados[indice].addEventListener("click", clicaQuadrado);
}

