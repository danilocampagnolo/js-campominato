// generare 16 numeri casuali da 1 a 100
var arrayGenerati = [];
for (var i = 0; i < 16; i++) {
  arrayGenerati.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arrayGenerati);
// chiedere all'utente di inserire per 84 volte un numero da 1 a 100
var userNumber = 0;
var trovato = false;
var i = 0;

while (i < 84 && trovato == false) {
  userNumber = parseInt(prompt("inserisci un numero"));
  // se numero inserito è presente nella lista di numeri generati, partita termina, altrimenti chiede un altro numero
  j = 0;
  while (j < arrayGenerati.length && trovato == false ) {
    if (userNumber == arrayGenerati[j]) {
      trovato = true;
    }
    j++
  }
  i++;
}
console.log(i - 1);
console.log(trovato);


// condizione di fine partita: il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.

// risultato: il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
