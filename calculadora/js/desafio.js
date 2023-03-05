
var valorHora = document.querySelector("#valor-hora");

var horasProjeto = document.querySelector("#horas-projeto");

var valorProjeto = document.querySelector("#resposta");

function calcular(){

    var valorProjeto = (valorHora.valueAsNumber * horasProjeto.valueAsNumber).toFixed(2);

    resposta.textContent = "R$  " + valorProjeto;
}

