// Abrir detalhes de cada receita
const recipes = document.querySelectorAll('.recipe');

for (let i = 0; i < recipes.length; i++) {
    recipes[i].addEventListener("click", function(){
        window.location.href = `/receitas/${i}`;
    });
}
// Mostrar/Esconder conteudo das receitas

// troca de nome do botão mostrar/esconder

    // ingredients
const ingredients = document.querySelector('.recipe-ingredients ul');
const hiddenIng = document.querySelector('.hidden-ing');
hiddenIng.addEventListener("click", function(){
    ingredients.classList.toggle("hidden");
    })
function myFunction1() {
  var x = document.getElementById("showHiddeIng");
  if (x.innerHTML === "ESCONDER") {
    x.innerHTML = "MOSTRAR";
  } else {
    x.innerHTML = "ESCONDER";
  }
}     
    // preparation
const preparation = document.querySelector('.recipe-preparation ul');
const hiddenPre = document.querySelector('.hidden-pre');
hiddenPre.addEventListener("click", function(){
    preparation.classList.toggle("hidden");
})
function myFunction2() {
  var x = document.getElementById("showHiddePre");
  if (x.innerHTML === "ESCONDER") {
    x.innerHTML = "MOSTRAR";
  } else {
    x.innerHTML = "ESCONDER";
  }
} 
    // information
const information = document.querySelector('.recipe-information p');
const hiddenInf = document.querySelector('.hidden-inf');
hiddenInf.addEventListener("click", function(){
    information.classList.toggle("hidden");
})
function myFunction3() {
  var x = document.getElementById("showHiddeInf");
  if (x.innerHTML === "ESCONDER") {
    x.innerHTML = "MOSTRAR";
  } else {
    x.innerHTML = "ESCONDER";
  }
}  









   