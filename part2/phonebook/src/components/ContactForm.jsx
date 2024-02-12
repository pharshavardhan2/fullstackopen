import { useState } from 'react'

const ContactForm = ({ contacts, setContacts }) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleChangeName = (event) => setNewName(event.target.value)

  const handleChangeNumber = (event) => setNewNumber(event.target.value)

  const handleSubmitContact = (event) => {
    event.preventDefault()
    if (contacts.findIndex(contact => contact.name === newName) === -1) {
      const contact = {
        name: newName,
        number: newNumber,
      }
      setContacts(contacts.concat(contact))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
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