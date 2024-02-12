const Contact = (props) => <p>{props.contact.name} {props.contact.number}</p>

const Contacts = ({ contacts, queryName }) => {
  const searchContacts = (query) => contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()))
  const mapComponent = (contacts) => contacts.map(contact => <Contact key={contact.name} contact={contact} />)

  if (queryName === '') return (<div>{mapComponent(contacts)}</div>)
  return <div>{mapComponent(searchContacts(queryName))}</div>
}

export default Contacts