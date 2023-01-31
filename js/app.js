

/*1-Chiedi all'utente la distanza */
const distance = parseFloat(prompt("Quanti km vuoi percorrere?"));

/*2-Chiedi all'utente l'età */
const age = parseInt(prompt("Qual è la tua età?"));


/*3-Calcolo costo biglietto per km e percentuale di sconto in base età */

const bigliettoPerKm = 0.21; /*Costo biglietto per km*/
const scontoTeeneger = 0.2; /*Valore sconto under 18*/
const scontoAnziani = 0.4;  /*Valore sconto over 65*/


/*4- Stabilisci l'operazione per cui dare un prezzo al biglietto in base ai km e al costo del biglietto per km*/

let bigliettoPrezzo = distance * bigliettoPerKm


/*5- Istruzioni condizionali: stabilisci il valore sconto in base all'età, ossia <18=02 , >65=0.4*/

if (age < 18) {
    bigliettoPrezzo *= 1 - scontoTeeneger;
  } else if (age >= 65) {
    bigliettoPrezzo *= 1 - scontoAnziani;
  }


/*6- stampa sulla pagina web il risultato della somma delle costanti*/
document.write("Il prezzo totale del tuo viaggio è: €" + bigliettoPrezzo.toFixed(2));  

 














