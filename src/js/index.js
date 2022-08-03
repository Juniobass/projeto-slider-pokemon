/*

OBJETIVO 2 - quando clicamos na seta de voltar temos que mostrar o cartão anterior da lista 
 - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar 
 - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar 
 - passo 3 - fazer aparecer o cartão anterior da lista 
 - passo 4 - buscar o cartão que está selecionado e esconder










/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que 
mostrar o proximo cartão da lista 
 - passo 1- dar um jeito de pegar o elemento HTML da seta voltar  
 - passo 2 - dar um jeito de identificar  o clique do usuario na seta voltar 
 - passo 3 - fazer aparecer o cartao anterior  da lista 
 - passo 4 - buscar o cartão que está  selecionado e esconder
 */
 //- passo 1- dar um jeito de pegar o elemento HTML da seta voltar  
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}
  

btnAvancar.addEventListener("click", function () {
  if(cartaoAtual === cartoes.length - 1) return;

 esconderCartaoSelecionado();

 cartaoAtual++;
 mostrarCartao(cartaoAtual);
//- passo 4 - buscar o cartão que está  selecionado e esconder

});







btnVoltar.addEventListener("click", function () {

  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();
 
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
 
});
