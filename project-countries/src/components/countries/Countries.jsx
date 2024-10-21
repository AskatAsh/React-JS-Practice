import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

    const handleVisitedCountry = (country) => {
        console.log("Add to visited coutries list");
        
        const newVisited = [...visitedCountries, country];
        setVisitedCountries(newVisited);
        // console.log(country);
    }
    
    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Countries: {countries.length}</h3>
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul className="list-visited">
                    {
                        visitedCountries.map(country => <li key={country.ccn3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
            {
                countries.map((country, idx) => <Country 
                    key={idx}
                    handleVisitedCountry={handleVisitedCountry} 
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;