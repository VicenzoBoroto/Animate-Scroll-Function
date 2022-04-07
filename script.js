//1º Passo: Selecionar os elementos que serão animados//
const target = document.querySelectorAll("[data-anime]");
const animateClass = "animate";

//2º Passo: Criar função que adicione a classe animate ao elemento se a distância do elemento com o topo for menor que a distância definida em windowTop//
function animeScroll() {
  //windowTop define o valor da distância com o topo em que o scroll está//
  const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
  //Para cada elemento iremos verificar se a distância do windowTop é maior que a distância com o topo do próprio elemento, se for verdadeiro vai adicionar a classe animate//
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
    element.classList.add(animateClass);
    } else {
    element.classList.remove(animateClass);
    }
  })
}

animeScroll();

//Aqui verificaremos se há algum elemento com animação na página para rodar a função, se sim adicionaremos um evento ao scrollar em que rodará a função animeScroll()//
if(target.length) {
  window.addEventListener("scroll", function(){
  animeScroll();
  })
}