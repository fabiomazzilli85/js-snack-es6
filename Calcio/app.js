// Creo il collegamento alla index mediante ''id''.
let elementoBiciclettaLeggera = document.getElementById("bicicletta-leggera")


// Creo un Array di oggetti.
let bicicletta = [
    { nome: 'biciclettaBianca', peso: 4 },
    { nome: 'biciclettaRossa', peso: 3 },
    { nome: 'biciclettaVerde', peso: 6 }
];


// Inizializzo la variabile.
let [biciclettaPiuLeggera, ...altreBiciclette] = bicicletta;


// Ciclo per confrontare il peso delle altre biciclette.
for (let {nome, peso} of altreBiciclette) {
    if (peso < biciclettaPiuLeggera.peso) {
        biciclettaPiuLeggera = {nome, peso};
    }
}


// In console.log è stampata correttamente la bicicletta rossa.
console.log("La bicicletta più leggera è:", biciclettaPiuLeggera.nome, "con peso di", biciclettaPiuLeggera.peso, "kg.");


// Creo un paragrafo.
let paragrafo = document.createElement("p");
paragrafo.textContent = "La bicicletta più leggera è: " + biciclettaPiuLeggera.nome + " con un peso di " + biciclettaPiuLeggera.peso + " kg.";


// Aggiungo il paragrafo all'elemento HTML con l'id "bicicletta-leggera".
elementoBiciclettaLeggera.appendChild(paragrafo);



// Creo un array di oggetti. 
// 1. A ogni squadra assegno un numero casuale di punti con il metodo ''Math Random'': il numero massimo di punti è 100.
// 2. Applico lo stesso metodo ai falli: questa volta il numero massimo di falli è 50.
// Eseguo un console.log che mi restituisce dati coerenti (punti <=100, falli <= 50).
let squadre = [
    { nome: 'Inter', punti: Math.floor(Math.random() * 100), falli: Math.floor(Math.random() * 50) },
    { nome: 'Juventus', punti: Math.floor(Math.random() * 100), falli: Math.floor(Math.random() * 50) },
    { nome: 'Milan', punti: Math.floor(Math.random() * 100), falli: Math.floor(Math.random() * 50) },
    { nome: 'Lazio', punti: Math.floor(Math.random() * 100), falli: Math.floor(Math.random() * 50) },
    { nome: 'Roma', punti: Math.floor(Math.random() * 100), falli: Math.floor(Math.random() * 50) }
];
// console.log(squadre)


// Eseguo la ''destrutturazione''. 
// Ho copiato integralmente questo script, modificandolo opportunamente. Avevo tentato due approcci differenti con scarsi risultati.
// A ogni refresh, i dati cambiano correttamente.
for (let { nome, falli } of squadre) {
    console.log("Nome:", nome);
    console.log("Falli:", falli);
}


// Creo un collegamento alla pagina HTML tramite ''id'' (calcio).
let squadra = document.getElementById("calcio")


// Uso il metodo forEach. 
// Creo un paragrafo con del contenuto.
// All'interno di questo paragrafo scrito il nome della squadra ("Nome: " + squadra.nome) e concateno il numero di falli (Falli: " + squadra.falli)
squadre.forEach(squadra => {
    let paragraph = document.createElement("p");
    paragraph.textContent = "Nome: " + squadra.nome + ", Falli: " + squadra.falli;
    calcio.appendChild(paragraph);
});


// Nota. Come è facile capire, il primo esercizio ha valori statici e quindi, pur aggiornando la pagina, il console.log non cambia. 
// Il secondo esercizio prevede che JS generi numeri casuali a ogni refresh, per cui il contenuto cambia sia nella pahina HTML sia nella console del browser. 