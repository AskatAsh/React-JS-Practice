import { useState } from 'react';
import './Country.css';

const Country = ({ country }) => {
    // console.log(country);
    // const {name: {common}, flags} = country;
    const { name, flags, capital, population, languages } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(true);
    }
    if (!languages) {
        return null;
    }
    const language = Object.values(languages);
    // console.log(language);

    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt={flags.alt} className='flag' />
            <p><b>Capital:</b> {capital}, <b>Population:</b> {population}</p>
            <p><b>Language: </b>{language[0]}</p>
            <button onClick={handleVisited}>{visited ? <span>Visited <i className="fa-solid fa-circle-check"></i></span> : "Visit"}</button>
            
        </div>
    );
};

export default Country;