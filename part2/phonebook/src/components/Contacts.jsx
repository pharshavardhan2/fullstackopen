import contactService from '../services/contacts'

const Contact = ({ contact, onClick }) => {
  return (
    <p>
      {contact.name} {contact.number} 
      <button onClick={onClick}>Delete</button>
    </p>
  )
}

const Contacts = ({ contacts, setContacts, queryName }) => {
  const handleDeleteOf = id => {
    const contactToDelete = contacts.find(contact => contact.id === id)
    if (window.confirm(`Delete ${contactToDelete.name} ?`)) {
      contactService.remove(id)
      .then(() => {
        setContacts(contacts.filter(contact => contact.id !== id))
      })
    }
  }
  
  const searchContacts = (query) => contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()))
  const mapComponent = (contacts) => contacts.map(contact => <Contact key={contact.name} contact={contact} onClick={() => handleDeleteOf(contact.id)}/>)

  if (queryName === '') return (<div>{mapComponent(contacts)}</div>)
  return <div>{mapComponent(searchContacts(queryName))}</div>
}

export default Contacts