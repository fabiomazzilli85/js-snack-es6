// Creo un Array contenente l'elenco degli studenti. 
const studenti = ['Marco Della Rovere', 'Paola Cortellessa', 'Andrea Mantegna', 'Gaia Borromini', 'Luigi Grimaldello', 'Piero della Francesca', 'Francesca da Polenta'];


// Converto i nomi degli studenti in modo che siano scritti in maiuscolo.
// Eseguo un console.log di verifica: OK.
const studentiMaiuscolo = studenti.map(nome => nome.toUpperCase());
// console.log(studentiMaiuscolo)


// Creo un Object ed eseguo un nuovo console.log di verifica: OK. 
const studentiObject = [
    { nome: 'MARCO DELLA ROVERE', id: 213, voto: 78 },
    { nome: 'PAOLA CORTELLESSA', id: 110, voto: 96 },
    { nome: 'ANDREA MANTEGNA', id: 250, voto: 48 },
    { nome: 'GAIA BORROMINI', id: 145, voto: 74 },
    { nome: 'LUIGI GRIMALDELLO', id: 196, voto: 68 },
    { nome: 'PIERO DELLA FRANCESCA', id: 102, voto: 50 },
    { nome: 'FRANCESCA DA POLENTA', id: 120, voto: 84 }
  ];

  // console.log(studentiObject);


// Con il metodo ''filter'' faccio una selezione e mando a schermo solo gli studenti che hanno un voto superiore a 70.
// Eseguo il console.log: OK.
  const studentiVotoSuperiore70 = studentiObject.filter(studente => studente.voto > 70);
  // console.log(studentiVotoSuperiore70);


// Uso di nuovo il metodo ''filter'' e concateno le richieste: ovvero lo studente deve avere unn voto superiore a 70 e un ID superiore a 120.
// Eseguo il console.log: OK.    
  const studentiVotoSuperiore70id120 = studentiObject.filter(studente => studente.voto > 70 && studente.id > 120);
  // console.log(studentiVotoSuperiore70id120)


 // Collego questo script all'ID '''listaStudenti'' nella pagina HTML. 
  const listaStudenti = document.getElementById('listaStudenti');


 // Creo una lista contenente il nome dello studente e il voto che ha conseguito. 
  studentiVotoSuperiore70.forEach(studente => {
    const listItem = document.createElement('li');
    listItem.textContent = `${studente.nome} - Voto: ${studente.voto}`;
    listaStudenti.appendChild(listItem);
  });


//  Collego questo script all'ID '''listaVotoId'' nella pagina HTML. 
  const listaStudentiID = document.getElementById('listaVotoId');


// Uso il metodo ''filter'' per prendere gli studenti che hanno un voto superiore a 70 e un ID superiore a 120.  
const studentiConIdSuperioreA120EVotoSuperioreA70 = studenti.filter(studente => studente.id > 120 && studente.voto > 70);


// Creo la lista effettiva contentente sia il nome dello studente, sia il suo ID, sia il voto.
studentiVotoSuperiore70id120.forEach(studente => {
  const listItem = document.createElement('li');
  listItem.textContent = `${studente.nome} - ID: ${studente.id} - Voto: ${studente.voto}`;
  listaStudentiID.appendChild(listItem);
});