var userNumber = 0;

var arrayGenerati = [];
for (var i = 0; i < 16; i++) {
  arrayGenerati.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arrayGenerati);

if (campoMinato(arrayGenerati, userNumber) == true) {
  console.log(i);
}
else {
  console.log(i);
}

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
