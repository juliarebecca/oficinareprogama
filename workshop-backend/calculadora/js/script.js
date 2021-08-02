var inputValorMes = document.querySelector("#ganho-mes"); 
var inputHorasDia = document.querySelector("#horas-dia"); 
var spanHora = document.querySelector("#resposta"); 

function calcularValorHora() { 
//dentro da funçao, sera executado 
    var qtdTotalHoras = inputHorasDia.valueAsNumber * 22; 
    var valorHora = (inputValorMes.valueAsNumber / qtdTotalHoras).toFixed(2);
    spanHora.textContent = "R$" + valorHora; 

}
 //.secao__rodape .secao__rodape__valor span
 //   console.log("Hello world!")    
 //console.log("Valor do mes", inputValorMes.value )
 //console.log("Horas do dia", inpultHorasDia.value )
 
 //console.log("Valor Final",spanHora)