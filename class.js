// "class" è una parola chiave riservata in JS che è stata introdotta al fine di uniformare la creazione
// di "fabbriche di oggetti" secondo una formula più "standard", al pari della creazione delle classi
// in JAVA e C#
// (sotto al cofano però è semplicemente uno "sugar coating" delle funzioni costruttore!)

// rifacciamo la funzione costruttore NamedPerson con la sintassi a classe:

class NamedPerson {
  constructor(_firstName, _lastName, _age, _skills, _country, _phone, _email) {
    // i parametri relativi ai valori che finiranno nelle proprietà dell'oggetto arrivano qua!
    // quindi dentro il constructor si vanno a definire le proprietà dei futuri oggetti che dipendono
    // dai parametri
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.skills = _skills
    this.country = _country
    this.phone = _phone
    this.email = _email
    // tutte le proprietà/metodi che inizializzate nel constructor DEVONO avere "this."
  }

  // se però avete anche delle proprietà il cui valore è STATICO e non dipende da parametri, potete
  // anche inserirli nella classe non necessariamente nel constructor
  greet = function () {
    return `Ciao, io mi chiamo ${this.firstName} ${this.lastName}`
  }

  numberOfLegs = 2 // come vedete questa proprietà l'ho messa FUORI dal constructor perchè il suo valore
  // sarà sempre 2 e non arriva da un parametro

  // tutte le proprietà/metodi che inizializzate FUORI dal constructor NON DEVONO avere "this."
}

const np3 = new NamedPerson(
  'Gianni',
  'Drudi',
  55,
  ['singing'],
  'Italy',
  '+3424323',
  'gianni.drudi@gmail.com',
)

console.log('NAMED PERSON 3', np3)

// BOSS FINALE
// la creazione di queste funzioni costruttore tramite la parola CLASS vi permette uno step in più:
// vi permette di creare delle SOTTO-CLASSI di altre CLASSI

// ora io andrò a creare la classe Developer
// al contrario della pubblica opinione, i Developer sono comunque persone!
// quindi per definire le loro proprietà io PARTIRÒ dalla classe NamedPerson, aggiungendo le proprietà
// e caratteristiche che mancano!

class Developer extends NamedPerson {
  // Developer è una SOTTO-CLASSE di NamedPerson
  // riceverà in dote TUTTE le proprietà di una normale NamedPerson, e in aggiunta avrà delle caratteristiche
  // che lo distinguono dalle persone normali, proprio perchè è un Developer
  constructor(
    _firstName,
    _lastName,
    _age,
    _skills,
    _country,
    _phone,
    _email,
    _programmingLanguages,
    _yoe,
  ) {
    // i primi 7 parametri di Developer in realtà fanno parte già del constructor di NamedPerson,
    // dove vengono create 7 proprietà a partire da ciascuno di essi. Devo -riscriverle- anche in Developer?
    // NO, perchè Developer ESTENDE NamedPerson! Si può fare così:

    super(_firstName, _lastName, _age, _skills, _country, _phone, _email)

    // così io ho già inizializzato SETTE delle NOVE proprietà di questa classe!
    // la parola "super" è un riferimento alla SUPERCLASSE di Developer

    this.programmingLanguages = _programmingLanguages
    this.yoe = _yoe
  }
}

const dev1 = new Developer(
  'Antonello',
  'Venditti',
  77,
  ['singing'],
  'Italy',
  '+3932423423',
  'antonello@venditti.com',
  ['Python'],
  10,
)

console.log('DEV1', dev1)
