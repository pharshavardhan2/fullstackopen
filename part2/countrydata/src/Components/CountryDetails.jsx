import Weather from './Weather'

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
      <p style={{fontSize: 150, margin: 2}}>{country.flag}</p>
      <Weather lat={country.latlng[0]} lon={country.latlng[1]} city={country.capital} />
    </div>
  )
}

export default CountryDetails