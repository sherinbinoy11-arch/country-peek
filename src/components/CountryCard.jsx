import { Link } from "react-router-dom";

function CountryCard({ country }) {
  const { name, flags, population, region, capital, cca3 } = country;

  return (
    <Link to={`/country/${cca3}`} className="card">
      <img src={flags.svg} alt={`Flag of ${name.common}`} />

      <h3 className="card__name">{name.common}</h3>

      <p>Population: {population.toLocaleString()}</p>

      <p>Region: {region}</p>

      <p>Capital: {capital?.[0] ?? "N/A"}</p>
    </Link>
  );
}

export default CountryCard;