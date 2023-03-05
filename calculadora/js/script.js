var ganhoMes = document.querySelector("#ganho-mes");

var horasDia = document.querySelector("#horas-dia");

var ganhoHora = document.querySelector(".secao-hora .secao__rodape__valor span");

function calcularValorHora(){
    var horasMes = horasDia.valueAsNumber * 22;

    var valorHora = (ganhoMes.valueAsNumber / horasMes).toFixed(2);

    ganhoHora.textContent = "R$ " + valorHora;

}