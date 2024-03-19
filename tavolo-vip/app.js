// Ho copiato l'Array che Gianluca ha scritto su Slack.
const tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];


// Implemento il metodo ''map'', che è un'alternativa al ciclo ''For''.
const vipTables = tavoloVip.map((ospite, indice) => {
  return {
    nomeDelTavolo: `Tavolo VIP ${indice + 1}`,
    nomeDellOspite: ospite,
    postoOccupato: indice + 1
  };
});


// Eseguo il ciclo For.
// 1. La  variavile ''i'' aumenta di 1 fino a che la condizione per cui ''i''  < tavoloVip.length è vera.
// 2. Creo un oggetto ''tableObject''.
// 3. Al suo interno ci sono tre voci: nome del tavolo, nome dell'ospite e posto occupato.
// 4. Pusho nell'oggetto (tableObject) nella variabile inizializzatata precedentemente.
// 5. Il console.log restituisce i risultati che mi aspetto ma anche un messaggio di errore (???)
for (let i = 0; i < tavoloVip.length; i++) {
  const tableObject = {
    nomeDelTavolo: `Tavolo VIP ${i + 1}`,
    nomeDellOspite: tavoloVip[i],
    postoOccupato: i + 1
  };
  vipTables.push(tableObject);
}

console.log(vipTables);
