var spanValorTotal = document.querySelector("#resposta");
var imputValorHora = document.querySelector("#valor-hora");
var imputHorasProjeto = document.querySelector("#horas-projeto");

function calcular () {
    var ValorProjeto = imputHorasProjeto.valueAsNumber * imputValorHora.valueAsNumber;
    spanValorTotal.textContent = "R$" + ValorProjeto;
}