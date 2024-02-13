import CountryDetails from './CountryDetails'

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

export default Display