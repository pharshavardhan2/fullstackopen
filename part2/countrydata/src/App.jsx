import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './Components/CountryList'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ query, setQuery ] = useState('')
  const [ countrySelected, setCountrySelected ] = useState(null)

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data))
  }, [])

  const handleChangeQuery = (event) => {
    setQuery(event.target.value)
    setCountrySelected(null)
  }

  const matchedCountries = countries.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      <label>
        find countries <input value={query} onChange={handleChangeQuery}/>
      </label>
      <CountryList countries={matchedCountries} countrySelected={countrySelected} setCountrySelected={setCountrySelected} />
    </div>
  )
}

export default App