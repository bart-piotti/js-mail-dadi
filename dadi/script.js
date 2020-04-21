//L'utente decidere se tirare il dado con un numero 1-6 o se affidarsi al caso
var lancio_utente = prompt("Inserisci un numero da 1 a 6 che determinerà il risultato del tuo lancio di dado.\nDigita 'RANDOM' per affidarti al caso");

//genera un lancio "casuale" per la cpu compreso tra 1 e 6
var lancio_cpu = Math.floor(Math.random() * 6 + 1);

//Stabilisci se l'utente ha inserito un numero valido
if (lancio_utente >= 1 && lancio_utente <= 6) {
    //Mostra il lancio dell'utente e quello della cpu
    console.log('Lancio utente: ' + lancio_utente);
    console.log('Lancio CPU: ' + lancio_cpu);

    //Stabilisce chi ha vinto (numero più alto) o se c'è un pareggio
    if (lancio_utente > lancio_cpu) {
        console.log('Hai vinto!');
    }
    else if (lancio_utente == lancio_cpu) {
        console.log("E' un pareggio!");
    }
    else {
        console.log('Hai perso!');
    }
}
//Randomizza il lancio dell'utente nel caso abbia selezionato random
else if (lancio_utente == 'RANDOM' || lancio_utente == 'random' || lancio_utente == 'Random') {
    lancio_utente = Math.floor(Math.random() * 6 + 1);

    //Mostra il lancio dell'utente e quello della cpu
    console.log('Lancio utente: ' + lancio_utente);
    console.log('Lancio CPU: ' + lancio_cpu);

    //Stabilisce chi ha vinto (numero più alto) o se c'è un pareggio
    if (lancio_utente > lancio_cpu) {
        console.log('Hai vinto!');
    }
    else if (lancio_utente == lancio_cpu) {
        console.log("E' un pareggio!");
    }
    else {
        console.log('Hai perso!');
    }
}
//Ricarica la pagina se l'utente non compila il prompt
else if (lancio_utente == '') {
    window.location.reload()
}
//Fa automaticamente perdere l'utente nel caso inserisca un numero più alto di 6
else if (lancio_utente > 6) {
    console.log('Lancio utente: ' + lancio_utente);
    console.log('Lancio CPU: ' + (parseInt(lancio_utente) + 1));
    console.log('Hai perso!\nVuoi giocare a chi bara di più? Fatti sotto');
}
//Messaggio di errore se l'utente inserisce un dato non valido
else {
    console.log('Lancio utente non valido! Ricarica la pagina per tentare di nuovo');
}
