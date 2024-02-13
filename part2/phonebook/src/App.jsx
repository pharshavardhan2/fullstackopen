import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'
import contactService from './services/contacts'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [ contacts, setContacts ] = useState([])
  const [ queryName, setQueryName ] = useState('')
  const [ notificationMessage, setNotificationMessage ] = useState(null)

  useEffect(() => {
    contactService.getAll()
      .then(initialContacts => setContacts(initialContacts))
  }, [])
  
  const handleChangeQuery = (event) => {
    const query = event.target.value.trim()
    setQueryName(query)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <div>
        <label>
          filter shown with <input value={queryName} onChange={handleChangeQuery}/>
        </label>
      </div>
      <h2>Add New Contact</h2>
      <ContactForm contacts={contacts} setContacts={setContacts} setNotificationMessage={setNotificationMessage} />
      <h2>Numbers</h2>
      <Contacts contacts={contacts} setContacts={setContacts} queryName={queryName} />
    </div>
  )
}

export default App