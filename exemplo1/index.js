let dolar = 5.09;
let dolar10 = 10* dolar;
console.log(`U$ 10 equivale a R$ ${dolar10}`);

let aluno = 'Chaves';
let nota1 = 7.58;
let nota2 = 9.12;
let media = (nota1 + nota2) / 2;
console.log(media);

let situacao;
if (media >=7) {
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
};
// console.log(`O aluno ${aluno} alcançou média ${media} e esta ${situacao}.`);
console.log(`O aluno ` +aluno+ ` alcançou média ` +media+ ` e esta ` +situacao+ `.`);

var dados = {
    nome: 'Marquito',
    idade : 38
}
console.table(dados);
console.log(dados.nome);