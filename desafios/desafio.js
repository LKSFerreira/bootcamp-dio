var eventos = [];

eventos.push(parseInt(prompt("Quantas coxinhas foram consumidas no evento?")));
eventos.push(parseInt(prompt("Qual o total de participates?")));

var media = (eventos[0]/eventos[1]);

console.log(media);


for (let i = 0; i < 2; i++) {
    let line = gets().split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(X/Y).toFixed(1); //complete com o sinal da operação faltante entre x e y
        console.log(divisao);
    }
}

