import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    {name: 'Harsha Vardhan',},
  ])
  const [ newName, setNewName ] = useState('')

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmitName = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
    }
    setPersons(persons.concat(person))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmitName}>
        <div>
          <label>
            Name:<input value={newName} onChange={handleChangeName}/>
          </label>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <p key={person.name}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App