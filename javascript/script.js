let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
  console.log("calculando");
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;
  let qdtTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2) * criancas;
  let qdtTotalBebida = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao) / 2) * criancas;
  let qdtTotalCerveja = cervejaPorPessoa(duracao) * adultos;
  resultado.innerHTML = `<p> ${qdtTotalCarne / 1000} Kg de carne </p>`
  resultado.innerHTML += `<p> ${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja </p>`
  resultado.innerHTML += `<p> ${Math.ceil(qdtTotalBebida / 2000)} Pet's de 2l de Bebida </p>`

}

function carnePorPessoa(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}


function cervejaPorPessoa(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidaPorPessoa(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}

