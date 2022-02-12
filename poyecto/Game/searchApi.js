
 /* CONSTANTE PARA LA API SOLO SACA 10 PERSONAJES CREO QUE ERAN */
const API_PERS = "https://rickandmortyapi.com/api/character/";
let cardsList;
let keyCardsList;
let numRandom = [];

//funcion para sacar el click
function addImageCard() {
  keyId = this.id;
  keyIdCard = keyId + "-img";
  document.getElementById(keyId).classList.add('hidden');
  document.getElementById(keyIdCard).classList.add('show');
}

//sacada de internet la siguiente funcion. Sirve para sacar que no se repitan los numeros random
function getRandomNumber(min, max) {
  let totalEle = max - min + 1;
  let result = Math.floor(Math.random() * totalEle) + min;
  return result;
}

function createArrayOfNumber(start, end) {
  let myArray = [];
  for (let i = start; i <= end; i++) {
    myArray.push(i);
  }
  return myArray;
}

let numbersArray = createArrayOfNumber(0, 19);
//hasta aqui

fetch(API_PERS)
.then(function respuesta(res) {
  return res.json();
})
.then(function sacarCartas(response) {
  cardsList = response.results;
  Object.keys(cardsList).forEach(key => {
    keyCardsList = key;
  });   
  let x;
  for (let i = 0; i < 8; i++) {
    x = i*2;
    let randomIndex = getRandomNumber(0, numbersArray.length - 1);
    let randomNumber = numbersArray[randomIndex];
    numRandom[x] = randomNumber;
    numRandom[x+1] = randomNumber;
    numbersArray.splice(randomIndex, 1);
  }

  console.log(numRandom);
debugger
  let shuffledArray = numRandom.sort((a, b) => 0.5 - Math.random());
  console.log(shuffledArray);

  let j = 0;
  shuffledArray.forEach(element => {
    j++;
    document.querySelector("#cartas").innerHTML += `<div id="${j}" class="listen imageCards${j}"><img src="../poyecto/image/card-blue.png" alt="carta azul"></div><div id="${j}-img" class="imageCardsAPI"><img src="${cardsList[element].image}" alt="${cardsList[element].name}"/></div>`;

  });

  //para el click
  let elements = document.getElementsByClassName("listen");

  Array.from(elements).forEach(function(element) {
    element.addEventListener('click', addImageCard);
  });

  
});