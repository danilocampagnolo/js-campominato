// var userNumber = 0;
//
// var arrayGenerati = [];
//
// while (arrayGenerati.length < 16) {
//   var estratto = getRandomNumber(1, 100);
//   if (arrayGenerati.includes(estratto) == false ) {
//     arrayGenerati.push(estratto);
//   }
// }
// console.log(arrayGenerati);
//
// if (campoMinato(arrayGenerati, userNumber) == true) {
//   console.log(i);
// }
// else {
//   console.log(i);
// }
//
// // ============================ FUNZIONI
//
// function campoMinato(array, userNumber) {
//   var trovato = false;
//   i = 0;
//
//   while (i < 84 && trovato == false) {
//     userNumber = parseInt(prompt("inserisci un numero"));
//     j = 0;
//     while (j < arrayGenerati.length && trovato == false ) {
//       if (userNumber == arrayGenerati[j]) {
//         trovato = true;
//         return true;
//       }
//       j++
//     }
//     i++;
//   }
//   return false;
// }
//
// function getRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   var random = Math.floor(Math.random() * (max - min + 1)) + min;
//   return random;
// }

// ======================================== CORREZIONE

// genero 16 numeri casuali non identici da 1 a 100 e li salvo
var numberBomb = [];
    // controllo che il numero non è già presente nell'array numberBomb
while (numberBomb.length < 16) {
  var numberRandom = getRandomNumber(1, 100);
  var find = isInArray(numberBomb, numberRandom); //true o false
  if (find == false) {
      numberBomb.push(numberRandom);
  }
}
console.log(numberBomb);

    // array per i numeri generati dall'utente
var numbersUser =[];
    // variabile per il numero di tentativi
var numberPrompt = 84;
    // variabile punteggio
var points = 0;
// messaggio standard
var message = "hai vinto";

// var controllo difficoltà
var numMinCheck;
var numMaxCheck;

// controllo valore difficoltà
var difficultyInput = 0;
do {
  var difficulty = parseInt(prompt("inserisci difficoltà: da 0 a 2"));
  difficultyInput++;
} while (checkRangeNumber(0, 2, difficulty) == false && difficultyInput < 3);

if (difficulty == 0) {
  numberPrompt = 84;
  numMinCheck = 1;
  numMaxCheck = 100;
} else if (difficulty == 1) {
  numberPrompt = 64;
  numMinCheck = 1;
  numMaxCheck = 80;
}
else if (difficulty == 2) {
  numberPrompt = 34;
  numMinCheck = 1;
  numMaxCheck = 50;
}

// prendo il numero elo confronto con tutti i numeri casuali generati prima
// chiedere 84(5 per testare) volte l'inserimento dei numeri da 1 a 100
var findBomb = false;
while (numbersUser.length < numberPrompt && findBomb == false) {

  // se il numero non è presente vado avanti achiedere altri numeri
  // controllo se numero è tra min e max
  do {
    var userNumber = parseInt(prompt("inserisci un numero da 1 a 100"));
  } while (checkRangeNumber(numMinCheck, numMaxCheck, userNumber) == false);


  if (isInArray(numbersUser, userNumber) == false) {
    numbersUser.push(userNumber);
    // se il numero è presente nella lista blocco il gioco, ha perso
    if (isInArray(numberBomb, userNumber) == true) {
      // mando messaggio
      message = "hai perso";
      findBomb = true;
    } else {
      points++;
    }
  }
}
console.log(numbersUser);
console.log(message + " " + points);






// termino le richieste quando arrivo a 84

// comunico punteggio finale

// ============================= FUNZIONI
// funzione che genera numeri
function getRandomNumber(numMin, numMax) {
  numMin = Math.ceil(numMin);
  numMax = Math.floor(numMax);
  var result = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  return result;
}

// var numeroRandom = getRandomNumber(1, 100);
// console.log(numeroRandom);

// funzione che cerca in un array
function isInArray(array, element) { //uguale a .includes()
  // for (var i = 0; i < array.length; i++) {
  //   console.log(array[i]);
  //   if (array[i] == element) {
  //     return true;
  //   }
  // }
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++
  }
  return result;
}

// funzione che controlla che un numero sia in un certo range
function checkRangeNumber(min, max, number) {
  var result = false;
  if (number >= min && number <= max) {
    result = true;
  }
  return result;
}
