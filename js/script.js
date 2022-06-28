// ativar links do menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
  /*if(url === href){
  console.log(link);
  por causa do contato enviar mensagem*/
  // location tem info do url
}

links.forEach(ativarLink);

// Ativar Items do Orçamento

//location => search = "?tipo=seguro&produto=prata"
// URLSearchParams serve para verificar os paramentros especificos dessa url, extraindo de "?tipo=seguro&produto=prata" os paramentros seguro e prata
// getElementById busca os ids seguro e prata usando as palavras-chaves do parametro. Usado no lugar de querySelector por n precisar passar o #
const parametros = new URLSearchParams(window.location.search);

function ativarProduto(parametro) {
  const elemento = window.document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa"); // add e retira a classe ativa resposta
  const ativa = resposta.classList.contains("ativa");

  pergunta.setAttribute("aria-expanded", ativa);
  //pergunta.setAttribute("aria-expanded", "true"); (faz uma setagem nova do valor do atributo, de false p/ true)
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
  //console.log(pergunta) destrincha cada item de botao. / ativarPergunta é a função que vai ocorrer ao click. / a const pergunta ^ puxa o evento que ta clicando, pergunta=button
}

perguntas.forEach(eventosPerguntas);

// galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

// prepende remove o elemento e joga pra outro canto(bicicleta imagens)
//matchMedia entre parentese que nem o @media normal
//matches está dentro do matchMedia e da o valor booleano em relação ao 937px
function trocarImagem(event) {
  const img = event.currentTarget;
  const media = window.matchMedia("(min-width: 937px)").matches;
  console.log(media);
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
  //console.log(img)
}

galeria.forEach(eventosGaleria);



//Animação

if (window.SimpleAnime) {
new SimpleAnime();
}
