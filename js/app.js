

/*1-Chiedi all'utente la distanza */
const distance = parseFloat(prompt("Quanti km vuoi percorrere?"));

/*2-Chiedi all'utente l'età */
const age = parseInt(prompt("Qual è la tua età?"));


/*3-Calcolo costo biglietto per km e percentuale di sconto in base età */

const bigliettoPerKm = 0.21; /*Costo biglietto per km*/
const scontoTeeneger = 0.2; /*Valore sconto under 18*/
const scontoAnziani = 0.4;  /*Valore sconto over 65*/


/*4- Stabilisci l'operazione per cui dare un prezzo al biglietto in base ai km e al costo del biglietto per km*/

let bigliettoPrezzo = distance * bigliettoPerKm;














