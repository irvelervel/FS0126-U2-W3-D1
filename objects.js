// in JS quando si ha la necessità di creare un OGGETTO è sufficiente utilizzare la sua NOTAZIONE LETTERALE:

const divano = {
  spots: 3,
  isle: false,
  color: 'beige',
  feetSupport: true,
  heavy: true,
  massaging: function () {
    // un METODO è una FUNZIONE dentro un OGGETTO
    alert('Ti stai potentemente rilassando...')
  },
}

divano.color // -> 'beige'
if (divano.heavy) {
  // -> true
  console.log('Il divano è pesante!')
}
divano.massaging() // stampa un alert con la stringa

// con JS è possibile creare un divano SINGOLARMENTE, senza avere prima fondato la "fabbrica dei divani"...
// ...questa può sembrare una bella comodità, perchè in altri linguaggi più OO ("object oriented") bisogna
// comunque, anche per creare un singolo oggetto, creare prima a monte la sua "fabbrica" (classe)

// ...però questo modo spicciolo di creare oggetti, può anche ritorcervisi contro! specialmente quando
// dovete crearne 200 di divani, e un modo strutturato per crearli vi farebbe comodo!

const divano2 = {
  spots: 2,
  isle: false,
  color: 'red',
  feetSupport: false,
  heavy: false,
  massaging: function () {
    // un METODO è una FUNZIONE dentro un OGGETTO
  },
}

const divano3 = {
  spots: 4,
  isle: true,
  color: 'beige',
  feetSupport: true,
  heavy: true,
  massaging: function () {
    // un METODO è una FUNZIONE dentro un OGGETTO
    alert('Ti stai potentemente rilassando...')
  },
}

// quindi, come risolviamo questo problema in JS? come possiamo creare anche in JS un modo STRUTTURATO
// per creare gli oggetti, in modo da non dover ricorrere a copincolla, modifiche retroattive, etc.?

// JS possiede fin dagli albori una struttura in grado di creare "in serie" degli oggetti dotati
// di caratterstiche simili -> FUNZIONE COSTRUTTORE

// -> andiamo su constructor.js
