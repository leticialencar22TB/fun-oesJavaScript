//Exemplo 1 
/*function mensagem () {
    alert("Seja bem-vindo(a)!")
    console.log("Seja bem-vindo(a)!")
}

mensagem()*/

//Exemplo 2 - função com parâmetros
/*function somar(numero1, numero2){
    alert(numero1 + numero2)
    console.log(numero1 + numero2)
}

let n1 = Number(prompt("Digite um número:"))
let n2 = Number(prompt("Digite outro número:"))

somar(n1,n2)
somar("14",18)*/

//Exemplo 3 - paramêtros de tipos diferentes
/*function mensagemPessoal(nome, cargo, anosTrabalhados) {
    alert('Seja bem vindo(a) ${cargo} $ nome. Estamos felizez por ter você trabalhando conosco há ${anosTrabalhados} anos.')
}

mensagemPessoal("Lucas", "Gerente", 10)
mensagemPessoal("Irineu", "Você não sabe, nem eu", 50)*/

//Exemplo 4 - o return nas funções
/*function somarEDevolver(numero1, numero2, numero3) {
    let resultado = numero1 + numero2 + numero3
    return resultado
}

let soma1 = somarEDevolver(10, 11, 12)
let soma2 = somarEDevolver(30, 40, 50)

alert(soma1)
alert(soma2)*/

//Exemplo 5 - if sem o else 
/*function parOuImpar(numero) {
    if (numero % 2 === 0){
        return "PAR"
    }
    return "ÍMPAR"

    let resultado1 = parOuImpar(10)
    let resultado2 = parOuImpar(15)

    alert('O número 10 é ${resultado1}')
    alert('O número 15 é ${resultado2}')
}*/

//Exemplo 6 - funções anônimas
/*document.querySelector("button").addEventListener("click", function() {
 alert("Clicou no botão")
})*/

//Exemplo 7 - arrow function
/*document.querySelector("button").addEventListener("click", () => {
    alert("Clicou no botão")
})*/ 

//Exemplo 8 - arrow functions com variáveis
let somar = (valor1, valor2) => valor1 + valor2
let resultadoSoma = somar(20, 30)
alert(resultadoSoma)
