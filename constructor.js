// una FUNZIONE COSTRUTTORE in JS è una FABBRICA DI OGGETTI
// quando si ha la necessità di creare tanti oggetti tutti uguali in serie, ha senso spendere un po'
// più di tempo all'inizio impegnandosi a creare una FABBRICA, un PROGETTO, un TIMBRO per i nostri oggetti
// in modo poi da poterli creare con poco sforzo sfruttando la struttura che abbiamo creato a monte.

const person1 = {
  firstName: 'Giangiorgio',
  lastName: 'Robespierre',
  age: 42,
  skills: ['cooking', 'singing'],
  country: 'FR',
  phone: '+362834823328',
  email: 'gian.giorgio@robespierre.com',
  greet: function () {
    // this è una parola riservata in JS che punta sempre al contesto di esecuzione corrente
    // ad es. ora siamo dentro un metodo di un OGGETTO, quindi "this" punta proprio all'oggetto!
    console.log('questo è this', this)
    return `Ciao, io mi chiamo ${this.firstName} ${this.lastName} e mi piace ${this.skills[0]}`
  },
}

// person1.email
// person1.lastName

const message = person1.greet()
// alert(message)

// bene, la notazione letterale degli oggetti è comoda per farne uno ogni tanto. Ma se invece avessi
// la necessità di creare 100 oggetti tutti con questo "schema" invece che copincollare 100 volte con
// il rischio di sbagliare potrei valutare la creazione di una FUNZIONE COSTRUTTORE.

// quando create una FUNZIONE COSTRUTTORE la nomenclatura richiede il PascalCase (anche la prima lettera in MAIUSCOLO)
const Person = function () {
  // questa sarà la nostra "fabbrica", "stampino", "blueprint" per gli oggetti
  this.firstName = ''
  this.lastName = ''
  this.age = 0
  this.skills = []
  this.country = ''
  this.phone = ''
  this.email = ''
  this.greet = function () {
    return `Ciao, io mi chiamo ${this.firstName} ${this.lastName} e mi piace ${this.skills[0]}`
  }
  // "this" sarebbe l'ISTANZA tornata da questa funzione costruttore
}

// CREAZIONE FABBRICA COMPLETATA!

// ora provvediamo ad "accendere" la fabbrica e fare uscire dal nastro trasportatore?
const p1 = new Person()
// p1 è un oggetto, volendo utilizzare la nomenclatura corretta si dice che p1 è un'ISTANZA di Person
console.log('ECCO P1', p1)

// ora che abbiamo un "guscio vuoto", andiamo a riempirlo con i valori per questa determinata istanza
p1.firstName = 'Matteo'
p1.lastName = 'Palvini'
p1.skills = []
p1.age = 50
// ...il fatto che la fabbrica però mi costruisca "gusci vuoti" mi costringe comunque come vedete ad
// assegnare ad ogni istanza i VALORI delle proprietà, quindi devo dire che il firstName di p1 è "Matteo",
// che il lastName di p1 è "Palvini", che le sue skills siano array vuoto etc.
// come faccio ad ottimizzare questo processo?
