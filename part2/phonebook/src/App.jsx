import { useState } from 'react'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'

const App = () => {
  const [ contacts, setContacts ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [ queryName, setQueryName ] = useState('')
  
  const handleChangeQuery = (event) => {
    const query = event.target.value.trim()
    setQueryName(query)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label>
          filter shown with <input value={queryName} onChange={handleChangeQuery}/>
        </label>
      </div>
      <h2>Add New Contact</h2>
      <ContactForm newName={newName} newNumber={newNumber} contacts={contacts} setNewName={set} />
      <h2>Numbers</h2>
      <Contacts contacts={contacts} queryName={queryName} />
    </div>
  )
}

export default App