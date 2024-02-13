import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetails = ({ country }) => {
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

const Display = ({ countries, query, countrySelected, setCountrySelected }) => {
  if (countrySelected === null) {
    const countriesMatched = countries.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()))
    
    if (countriesMatched.length > 10) return <p>Too many countries, specify another filter</p>
    if (countriesMatched.length <= 10 && countriesMatched.length > 1) {
      return (
        <div>
          {countriesMatched.map(country => <p key={country.cca2}>{country.name.common}<button onClick={() => setCountrySelected(country)}>show</button></p>)}
        </div>
      )
    }
    if (countriesMatched.length === 1) return <CountryDetails country={countriesMatched[0]} />
  } else {
    return <CountryDetails country={countrySelected} />
  }

  
}

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