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
const price = distance * priceForKm;
// const priceFixed = Number(price.toFixed(2));
// console.log(priceFixed);


// va applicato uno sconto del 20% per i minorenni
const percentageDiscount18 = 20;
const under18 = price * (1 - (percentageDiscount18 / 100));
// const under18Fixed = Number(under18.toFixed(2));
// console.log(under18Fixed);

// va applicato uno sconto del 40% per gli over 65. */
const percentageDiscount65 = 40;
const over65 = price * (1 - (percentageDiscount65 / 100));
// const over65Fixed = Number(over65.toFixed(2));
// console.log(over65Fixed);



if (passengerAge < 18) {
    alert(under18.toFixed(2))
} else if (passengerAge > 65) {
    alert(over65.toFixed(2))
} else {
    alert(price.toFixed(2))
}
