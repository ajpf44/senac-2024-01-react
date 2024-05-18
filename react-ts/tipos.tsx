//String - Number - Boolean

//Tipagem por inferência
let nome = "João Felipe";
// nome = 3;
console.log(typeof nome)

//Tipagem explícita
let idade: number = 33
// idade = "asfsd"

//Tipagem de Funções

function somar(num1: number, num2:number): number {
    return num1 + num2;
}

const pessoa: Pessoa = {
    name: "joão",
    idade: 33
}

type Pessoa = {
    name: string,
    idade: number
}