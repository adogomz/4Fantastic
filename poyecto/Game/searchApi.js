
 /* CONSTANTE PARA LA API SOLO SACA 10 PERSONAJES CREO QUE ERAN */
const API_PERS = "https://rickandmortyapi.com/api/character/";
let cardsList;
let keyCardsList;

fetch(API_PERS)
.then(function respuesta(res) {
  return res.json();
})
.then(function sacarCartas(response) {
  cardsList = response.results;
  Object.keys(cardsList).forEach(keyCardsList => {
    document.querySelector("#cartas").innerHTML += `<div class="imageCards"><img src="${cardsList[keyCardsList].image}" alt="${cardsList[keyCardsList].name}"/></div>`;
  });
});


