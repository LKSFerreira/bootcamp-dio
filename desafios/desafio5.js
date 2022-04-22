//TODO: Complete os espaços em branco com uma solução possível para o problema.
/*
let numeroAlunos = prompt("Quantidade Aluno");
let inscritos = [];
let aprovados = [];

for (i = 0; i < numeroAlunos; i++) {

    inscritos.push(prompt("Matricula e Nota").split(" "));

    //console.log(inscritos);

    if (inscritos[i][1] >= 8) {
        aprovados.push(inscritos[i][0]);
        // console.log(aprovados);
    }
   
}
if (aprovados.length >= 1) {
    console.log(aprovados);
} else {
    console.log("Minimum note not reached"); 
}


let line = gets();
let matricula;

for(i=0; i<line; i++){
  line = gets();
  line = line.split(" ")
  if(parseFloat(       )>=     ){
    matricula = line[  ]
  }
}
*/


let alunos = 2;
let matricula = 0;
let notaCorte = 8;

for (i = 0; i < alunos; i++) {
    line = prompt("Matricula e Nota");
    line = line.split(" ");
    console.log(line);
    if ((parseFloat(line[1]) >= notaCorte )) {
        matricula = line[0];
        notaCorte = line[1];
        console.log("Matricula "+ matricula);
        console.log("NOTA: " + line[1]);
            
    }
}

if (matricula != 0) {
    console.log(matricula);
} else {
    console.log("Minimum note not reached");
}


/*
let aluno = gets();
let matricula = [];

for (i = 0; i < aluno; i++) {
    line = gets();
    line = line.split(" ");
    if (matricula[i] != line[0]) {
        if (parseFloat(line[1]) >= 8) {
            matricula.push(line[0].split(" "));
        }
    }
}
if (matricula.length >= 1) {
    console.log(matricula);
} else {
    console.log("Minimum note not reached");
} */