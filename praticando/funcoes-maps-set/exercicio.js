function mostra(frase) {
    console.log(frase);
}
const lista = [
    {
        name: "Limão",
        valor: 5,
    },
    {
        name: "Cereal",
        valor: 19,
    },
    {
        name: "Chocolate",
        valor: 27,
    },
    {
        name: "Tolalha",
        valor: 30,
    }]

const saldo = 100;

function compras(lista, saldo) {
    return lista.reduce(function (prev, current) {
        return prev - current.valor;
         }, saldo);
}

mostra(compras(lista, saldo));















/* function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        console.log({prev});
        console.log({current});
        return prev+ current;
    });
} 

const arr = [1, 2, 3, 4, 5, 6];

console.log(somaNumeros(arr));
*/