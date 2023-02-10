var linksAdicionados = [];

function adicionarGame() {
  var gameFavorito = document.getElementById("game").value;
  var nameGame = document.getElementById("nameGame").value;
  if (linksAdicionados.includes(gameFavorito)) {
    alert("Link já adicionado. Insira um link diferente.");
    return;
  }
  linksAdicionados.push(gameFavorito);
  var elementoListaGame = document.getElementById("listaGames");
  var div = document.createElement("div");
  div.style.display = "inline-block";
  div.style.margin = "10px";
  var imagem = new Image();
  imagem.src = gameFavorito;
  imagem.onload = function () {
    div.innerHTML =
      "<a href='https://www.youtube.com/results?search_query=" +
      nameGame +
      "' target='_blank'><img src=" +
      gameFavorito +
      "></a><p>" +
      nameGame +
      "</p>";
    elementoListaGame.appendChild(div);
  };
  imagem.onerror = function () {
    alert("O endereço da imagem não é válido ou não é uma imagem");
  };
  document.getElementById("game").value = "";
  document.getElementById("nameGame").value = "";
}

function removerGame() {
  let listaDeGames = document.getElementById("listaGames");
  let ultimoGame = listaDeGames.lastElementChild;
  listaDeGames.removeChild(ultimoGame);
}
