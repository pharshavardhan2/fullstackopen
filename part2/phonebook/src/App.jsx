import { useState, useEffect } from 'react'
import axios from 'axios'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'

const App = () => {
  const [ contacts, setContacts ] = useState([])
  const [ queryName, setQueryName ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => setContacts(response.data))
  }, [])
  
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
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <h2>Numbers</h2>
      <Contacts contacts={contacts} queryName={queryName} />
    </div>
  )
}

export default App