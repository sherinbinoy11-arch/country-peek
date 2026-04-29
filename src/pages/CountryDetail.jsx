import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetail() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [code]);

  if (!country) return <p>Loading...</p>;

  return (
    <div className="country-page">
      <img src={country.flags.svg} alt={country.name.common} />

      <h2>{country.name.common}</h2>

      <p>Capital: {country.capital?.[0] ?? "N/A"}</p>

      <p>Region: {country.region}</p>

      <p>Subregion: {country.subregion ?? "N/A"}</p>

      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
}

export default CountryDetail;