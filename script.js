//convertendo com só um campo de entrada
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
  valorAdicionado.innerHTML =
    valorAdicionado =
    document.querySelector("#valor").value =
      "";
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
  if (cardinal <= 2) {
    alert("Tem que ter, pelo menos, dois valores adicionados");
  } else {
    media = somaValores(valor) / valor.length;
    console.log(media);
    media = media.toFixed(1);
    console.log(media);
    let cardinalAtual = cardinal - 1;
    let resultado = document.querySelector("#resultadoDaMedia");
    let resultadoNovo =
      "A média é " + media + " dos " + cardinalAtual + " valores adicionados";
    resultado.innerHTML = resultadoNovo;
    // abilitando botão de limpar
    let btmLimpar = document.querySelector(".Limpar");
    btmLimpar.style.display = "block";
  }
}
mudaValor();

function limpar() {
  let resultado = document.querySelector("#resultadoDaMedia");
  resultado.innerHTML = "";

  cardinal = 1;

  //atulizando para mudar o valor
  mudaValor();

  // desabilitando botão de limpar
  let btmLimpar = document.querySelector(".Limpar");
  btmLimpar.style.display = "none";
}
