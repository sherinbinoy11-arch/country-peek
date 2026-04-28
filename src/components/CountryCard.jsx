import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";

function CountryCard({ country }) {
  const { favourites, dispatch } = useFavourites();

  const { cca3, name, flags, population, region, capital } = country;

  const isSaved = favourites.some((f) => f.cca3 === cca3);

  const handleFavClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isSaved) {
      dispatch({
        type: "REMOVE_FAVOURITE",
        payload: cca3,
      });
    } else {
      dispatch({
        type: "ADD_FAVOURITE",
        payload: country,
      });
    }
  };

  return (
    <Link to={`/country/${cca3}`} className="card">
      <img src={flags.svg} alt={name.common} className="card__flag" />

      <div className="card__body">
        <h3>{name.common}</h3>
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital?.[0]}
        </p>

        <button
          className={`fav-btn ${isSaved ? "fav-btn--saved" : ""}`}
          onClick={handleFavClick}
        >
          {isSaved ? "♥ Saved" : "♡ Save"}
        </button>
      </div>
    </Link>
  );
}

export default CountryCard;