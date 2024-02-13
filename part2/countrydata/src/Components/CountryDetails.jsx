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
      <img src={country.flags.png} width={150} alt={country.flags.alt}/>
      <Weather lat={country.capitalInfo.latlng[0]} lon={country.capitalInfo.latlng[1]} city={country.capital[0]} />
    </div>
  )
}

export default CountryDetails