// recuperiamo i campi input dal form
const firstNameInput = document.getElementById('firstName')
const lastNameInput = document.getElementById('lastName')
const phoneInput = document.getElementById('phone')

// vado a creare la CLASSE per generare oggetti di tipo CONTATTO
class Contact {
  constructor(_firstName, _lastName, _phone) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.phone = _phone
  }
  favorite = false
}

// ora, agiamo sull'evento di submit, interrompiamo il comportamento di default
// e recuperiamo i valori degli input una volta che l'utente clicca il tasto verde
const form = document.getElementById('rubrica-form')
form.addEventListener('submit', function (e) {
  // ora fermo il comportamento di default
  e.preventDefault()
  // ora recupero i dati dai 3 campi input
  const firstName = firstNameInput.value
  const lastName = lastNameInput.value
  const phone = phoneInput.value
  // ora creerò un oggetto a partire da questi 3 semplici campi, ma lo farò tramite una CLASSE
  const newContact = new Contact(firstName, lastName, phone)
  console.log('CONTATTO SALVATO!', newContact)
  form.reset() // svuotiamo il form una volta salvato in console
})
