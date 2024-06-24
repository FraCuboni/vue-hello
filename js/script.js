// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// collego il createApp di Vue
const {createApp} = Vue;


createApp({
    // creo il data container
    data(){
        return{
            // scrivo hello vue!
            message: 'hello vue!'
            // aggiungo l'immagine:
        }
    }
// linko al container
}).mount('#container')