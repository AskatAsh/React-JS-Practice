import { useEffect, useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedData);
      });
  }, []);
  const handleVisitedCountry = (country) => {
    const newVisited = [...visitedCountries, country];
    setVisitedCountries(newVisited);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Total Countries: {countries.length}</h2>
      <div>
        <h3>Visited Countries: {visitedCountries.length}</h3>
        <ul className="list-visited">
          {visitedCountries.map((country) => (
            <li key={country.ccn3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="country-container">
        {countries.map((country, idx) => (
          <Country
            key={idx}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
