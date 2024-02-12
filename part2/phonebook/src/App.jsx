import { useState } from 'react'

const Contact = (props) => <p>{props.contact.name} {props.contact.number}</p>

const Contacts = ({ contacts, queryName }) => {
  const searchContacts = (query) => contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()))
  const mapComponent = (contacts) => contacts.map(contact => <Contact key={contact.name} contact={contact} />)

  if (queryName === '') return (<div>{mapComponent(contacts)}</div>)
  return <div>{mapComponent(searchContacts(queryName))}</div>
}

const App = () => {
  const [ contacts, setContacts ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ queryName, setQueryName ] = useState('')
  
  const handleChangeQuery = (event) => {
    const query = event.target.value.trim()
    setQueryName(query)
  }

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
    <div>
      <h2>Phonebook</h2>
      <div>
        <label>
          filter shown with <input value={queryName} onChange={handleChangeQuery}/>
        </label>
      </div>
      <h2>Add New Contact</h2>
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
      <h2>Numbers</h2>
      <Contacts contacts={contacts} queryName={queryName} />
    </div>
  )
}

export default App