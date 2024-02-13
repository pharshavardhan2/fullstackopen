import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './Components/Display'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ query, setQuery ] = useState('')
  const [ countrySelected, setCountrySelected ] = useState(null)

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleChangeQuery = (event) => {
    setQuery(event.target.value)
    setCountrySelected(null)
  }

  return (
    <div>
      <label>
        find countries <input value={query} onChange={handleChangeQuery}/>
      </label>
      <Display countries={countries} query={query} countrySelected={countrySelected} setCountrySelected={setCountrySelected} />
    </div>
  )
}

export default App