var participantes = prompt("Quantas criaças deseja presentear?");
var criancas;
var array = [];
for(i = 1; i <= participantes; i++){
  criancas = prompt("Qual nome da criança?").split(' ');
  array.push(criancas);
}

const meninos = array.filter((m) => m.includes('M')).length;
const meninas = array.filter((m) => m.includes('F')).length;
console.log(meninos + " carrinhos\n" + meninas + " bonecas");