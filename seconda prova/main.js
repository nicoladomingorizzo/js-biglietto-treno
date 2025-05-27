/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
TIP: per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60
*/

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const distance = Number(prompt('Scrivi il numero dei chilometri che vuoi percorrere'));
const passengerAge = Number(prompt("Scrivi l'età del passeggero"));
// console.log(distance, passengerAge);

/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km) */
const priceForKm = 0.21;
let price = distance * priceForKm;

if (passengerAge < 18) {
    const discountPercent = 20;
    price = price * (1 - (discountPercent / 100));
} else if (passengerAge > 65) {
    const discountPercent = 40;
    price = price * (1 - (discountPercent / 100))
}

alert(price.toFixed(2));
