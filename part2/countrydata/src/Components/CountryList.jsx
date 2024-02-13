import CountryDetails from './CountryDetails'

const CountryList = ({ countries, countrySelected, setCountrySelected }) => {
  if (countrySelected === null) {    
    if (countries.length > 10) return <p>Too many countries, specify another filter</p>
    if (countries.length <= 10 && countries.length > 1) {
      return (
        <div>
          {countries.map(country => <p key={country.cca2}>{country.name.common}<button onClick={() => setCountrySelected(country)}>show</button></p>)}
        </div>
      )
    }
    if (countries.length === 1) return <CountryDetails country={countries[0]} />
  } else {
    return <CountryDetails country={countrySelected} />
  } 
}

export default CountryList