//convertendo com só um campo de entrada
//não está completo
var valor = [];
var cardinal = 1;
var media = 0;

function mudaValor() {
  var insiraEscrito = document.querySelector("#insiraEscrito");
  var insiraEscritoNovo = "INSIRA O " + cardinal + "° VALOR:";
  insiraEscrito.innerHTML = insiraEscritoNovo;
}

function adicionarNaMedia() {
  var valorAdicionado = document.querySelector("#valor");
  valor.push(Number(valorAdicionado.value));
  console.log(valor);
  //logo em sequido, fiz com que o campo limpasse depois do evento
  valorAdicionado.innerHTML = valorAdicionado = document.querySelector(
    "#valor"
  ).value = "";
  cardinal = cardinal + 1;
  mudaValor();
}

//fiz essa function para somar todos os valores da Array
function somaValores(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total = total + array[i];
    console.log(total);
  }

  return total;
}
//enfim, fiz o calculo da media
function calculandoMedia() {
  media = somaValores(valor) / valor.length;
  media = media.toFixed(1);
  var resultado = document.querySelector("#resultadoDaMedia");
  var resultadoNovo = "A média é " + media;
  resultado.innerHTML = resultadoNovo;
}
mudaValor();

//var notaDoPrimeiroBimestre = 0;
//var notaDoPrimeiroBimestre = 0;
//var notaDoPrimeiroBimestre = 0;
//var notaDoPrimeiroBimestre = 0;
/*var notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoPrimeiroBimestre +
    notaDoPrimeiroBimestre +
    notaDoPrimeiroBimestre) /
  4;
var notaFixa = notaFinal.toFixed(1);
console.log("Bem vindo" + nome);
console.log(notaFinal); */