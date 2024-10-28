<!-- Lavoro Richiesto -->
 chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

<!-- elenco di dati  Richiesta ad utente e dati in possesso -->
Chiedere all' utente il numero di Km da percorrere 
chiedere all' utente l'età 
prezzo del biglietto (0.21€ al km)
sconti basati sull' età
minorenni sconto del 20%
 età oltre i 65 hanno 40%

<!-- Esecuzione Logica -->
Chiedere la prima variabile KM
chiedere seconda variabile Età
convertire input in numeri
creare prezzo del biglietto tenendo conto solo dei km
apprlicare le condizionali su età
se ha meno di 18 applicare 20%
altrimenti se ha più di 65 anni applicare il 40%
altrimenti applicare il prezzo pieno
 
 dare un massimo di due numeri oltre la virgola con toFix2

 stampare messaggio con prezzo finale per l'utente con consolle.log