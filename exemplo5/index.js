import chalk from "chalk";

// console.log(chalk.blue('Trabalhando com NPM'));
// console.log(chalk.blue.bgRed.bold('Trabalhando com NPM'));


let aluno = 'Ignacio';
let idade = 10;

if (idade>=18) {
    console.log(`${chalk.green('O aluno:')} ${aluno} ${chalk.green('é maior de idade')}`);
} else {
    // console.log(chalk.red(`O aluno: ${aluno} é menor de idade!`));
    console.log(`${chalk.red('O aluno:')} ${aluno} ${chalk.red('é menor de idade')}`);
}