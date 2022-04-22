let valoresPares = 0;
let valoresImpares = 0;
let valoresPositivos = 0;
let valoresNegativos = 0;

for (let i = 0; i < 5; i++) {
    const valorInformadoPeloUsuario = parseInt(prompt());
    if (valorInformadoPeloUsuario % 2 == 0) {
        valoresPares++;
    } else {
        valoresImpares++;
    }

    if (valorInformadoPeloUsuario > 0) {
        valoresPositivos++;
    } else if (valorInformadoPeloUsuario < 0) {
        valoresNegativos++;
    }
    /*    
        let X = parseInt(line[0]);
        let Y = parseInt(line[1]);
        if (Y == 0) {
            console.log("divisao impossivel");
        } else {
            let divisao = parseFloat(X/Y).toFixed(1); //complete com o sinal da operação faltante entre x e y
            console.log(divisao);
        }
    */
}

console.log(valoresPares + " par(es)");
console.log(valoresImpares + " impar(es)");
console.log(valoresPositivos + " positivo(s)");
console.log(valoresNegativos + " negativo(s)");

