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
function mensagemPessoal(nome, cargo, anosTrabalhados) {
    alert('Seja bem vindo(a) ${cargo} $ nome. Estamos felizez por ter você trabalhando conosco há ${anosTrabalhados} anos.')
}

mensagemPessoal("Lucas", "Gerente", 10)
mensagemPessoal("Irineu", "Você não sabe, nem eu", 50)