var userNumber = 0;

var arrayGenerati = [];

while (arrayGenerati.length < 16) {
  var estratto = getRandomNumber(1, 100);
  if (arrayGenerati.includes(estratto) == false ) {
    arrayGenerati.push(estratto);
  }
}
console.log(arrayGenerati);

if (campoMinato(arrayGenerati, userNumber) == true) {
  console.log(i);
}
else {
  console.log(i);
}

// ============================ FUNZIONI

function campoMinato(array, userNumber) {
  var trovato = false;
  i = 0;

  while (i < 84 && trovato == false) {
    userNumber = parseInt(prompt("inserisci un numero"));
    j = 0;
    while (j < arrayGenerati.length && trovato == false ) {
      if (userNumber == arrayGenerati[j]) {
        trovato = true;
        return true;
      }
      j++
    }
    i++;
  }
  return false;
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}
