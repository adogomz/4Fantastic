 
 /* CONSTANTE PARA LA API SOLO SACA 10 PERSONAJES CREO QUE ERAN */
const API_PERS = "https://rickandmortyapi.com/api/character/";


 fetch(API_PERS)
 .then(function respuesta(res) {
   return res.json();
 })
 .then(function sacarCartas(cards) {
   for (let i = 0; i < cards.results<= 8; i++) {
     document.getElementById("cartas").innerHTML += `
 <div>
 <img src="${cards.results[i].image}" alt="${cards.results[i].name}"/>
 </div>
 `;
   }
 });