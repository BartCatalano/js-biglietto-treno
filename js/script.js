// Input utente
// chiediamo ad utente km da percorrere ed età

// Prompt età
const userAge = prompt("Inserisci la tua età");

console.log(userAge, typeof userAge)

// Controlliamo se il dato inserito è realmente un numero
if (isNaN(userAge)){
    alert("Inserire età in maniera corretta!")
}

// Convertiamo la stringa età in numero
const userVAge = parseInt(userAge);
     //  userVerificatedAge
console.log(userVAge); 


// Prompt Km
const userKm = prompt("Inserisci i KM da percorrere");

console.log(userKm, typeof userKm);

// Controlliamo se il dato inserito è realmente un numero
if (isNaN(userKm)){
    alert("Inserire Km in maniera corretta!")
}

// Convertiamo la stringa Km in numero
const userVKm = parseInt(userKm);
     //  userVerificatedKm
console.log(userVKm); 


// Calcoliamo costo del biglietto

const TicketValue = (userVKm * 0.21);
console.log(TicketValue);

// Controlliamo se bisogna applicare uno sconto

let message;             //  variabile globale 
if (userVAge < 18) {
    const MDiscount = ((TicketValue / 100) * 20 );
    const finalTicket = TicketValue - MDiscount;
    const finalTicketFix =finalTicket.toFixed(2);
    console.log(finalTicket);

    message = `Il prezzo del biglietto è di ${finalTicketFix}€ con lo sconto applicato ai Minori!`
    console.log(message);     
}
else if (userVAge > 65) {
    const ODiscount = ((TicketValue / 100) * 40 );
    const finalTicket = TicketValue - ODiscount;
    const finalTicketFix =finalTicket.toFixed(2);
    console.log(finalTicket);

    message = `Il prezzo del biglietto è di ${finalTicketFix}€ con lo sconto applicato agli Over 65!`
    console.log(message);     
}
else {
    const TicketValueFix = TicketValue.toFixed(2);
    message = `Il prezzo del biglietto è di ${TicketValueFix}€ Grazie per averci scelto!`
    console.log(message);     
}

