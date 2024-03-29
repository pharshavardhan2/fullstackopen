import { useState } from 'react'
import contactService from '../services/contacts'

const ContactForm = ({ contacts, setContacts, setNotificationMessage }) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleChangeName = (event) => setNewName(event.target.value)

  const handleChangeNumber = (event) => setNewNumber(event.target.value)

  const flashNotification = (content, className, time) => {
    setNotificationMessage({ content, className })
    setTimeout(() => setNotificationMessage(null), time)
  }

  const handleSubmitContact = (event) => {
    event.preventDefault()
    const existingContact = contacts.find(contact => contact.name === newName)
    if (existingContact === undefined) {
      const contact = {
        name: newName,
        number: newNumber,
      }
      contactService.create(contact)
        .then(returnedContact => {
          setContacts(contacts.concat(returnedContact))
          flashNotification(`Added ${contact.name}`, 'success', 5000)
        })
        .catch(error => {
          flashNotification(error.response.data.error, 'error', 5000)
        })
    } else {
      if (window.confirm(`${existingContact.name} is already added to phonebook, replace the old number with a new one?`)) {
        contactService.update(existingContact.id, { ...existingContact, number: newNumber })
          .then(returnedContact => {
            setContacts(contacts.map(contact => contact.id !== existingContact.id ? contact : returnedContact))
            flashNotification(`Updated ${existingContact.name}'s number`, 'success', 5000)
          })
          .catch(error => {
            flashNotification(error.response.data.error, 'error', 5000)
          })
      }
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit={handleSubmitContact}>
      <div>
        <label>
          Name:<input value={newName} onChange={handleChangeName} />
        </label>
      </div>
      <div>
        <label>
          Number:<input value={newNumber} onChange={handleChangeNumber} />
        </label>
      </div>
      <div>
        <button>add</button>
      </div>
    </form>
  )
}

export default ContactForm