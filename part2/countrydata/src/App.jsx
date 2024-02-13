import { useState, useEffect } from 'react'
import axios from 'axios'

const Display = ({ countries, query }) => {
  const countriesMatched = countries.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()))
  if (countriesMatched.length > 10) return <p>Too many countries, specify another filter</p>
  if (countriesMatched.length <= 10 && countriesMatched.length > 1) {
    return (
      <div>
        {countriesMatched.map(country => <p key={country.cca2}>{country.name.common}</p>)}
      </div>
    )
  }
  if (countriesMatched.length === 1) {
    const country = countriesMatched[0]
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital.join(" ")}</p>
        <p>area {country.area}</p>
        <h2>languages:</h2>
        <ul>
          {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
        </ul>
        <p style={{fontSize: 150, marginTop: 2}}>{country.flag}</p>
      </div>
    )
  }
}

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ query, setQuery ] = useState('')

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleChangeQuery = (event) => {
    setQuery(event.target.value)    
  }

  return (
    <div>
      <label>
        find countries <input value={query} onChange={handleChangeQuery}/>
      </label>
      <Display countries={countries} query={query} />
    </div>
  )
}

export default App