//Chiedi all'utente di inserire la propria mail
var email_utente = prompt('Inserisci la tua email per accedere');

//Crea una lista di emails abilitate all'accesso
var email_list = ['abcd@gmail.com', 'qwer@gmail.com', 'asd@mail.com', '1234@gmail.com']

//Dichiaro la var permesso per far ricordare allo script se la mail è abilitata o meno
var permesso = false;

//Confronta l'email utente con le emails abilitate e setta permesso a true se almeno una corrsiponde
for (var i = 0; (i < email_list.length) && (permesso != true); i++) {
    if (email_list[i] == email_utente) {
        permesso = true;
    }
}

//Controlla che permesso sia true e solo in quel caso consente l'accesso
if (permesso == true) {
    console.log('Accesso consentito');
}
else {
    console.log('Accesso negato');
}
