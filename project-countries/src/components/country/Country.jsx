import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, capital, population, languages } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountry(country);
  };

  const language = !languages ? ["Not Available"] : Object.values(languages);

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>Name: {name?.common}</h3>
      <div className="img-container">
        <img src={flags.png} alt={flags.alt} className="flag" />
      </div>
      <p>
        <b>Capital:</b> {capital}, <b>Population:</b> {population}
      </p>
      <p>
        <b>Language: </b>
        {language.map((lang, id) => (
          <span key={id}>
            {lang}
            {id == language.length - 1 ? "" : ", "}
          </span>
        ))}
      </p>

      <div className="flex-button">
        <button onClick={handleVisited} disabled={visited}>
          {visited ? (
            <span>
              Visited <i className="fa-solid fa-circle-check"></i>
            </span>
          ) : (
            "Travel"
          )}
        </button>
      </div>
    </div>
  );
};

export default Country;
