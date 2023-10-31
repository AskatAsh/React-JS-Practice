import { useState } from 'react';
import './Country.css';

const Country = ({ country }) => {
    // console.log(country);
    // const {name: {common}, flags} = country;
    const { name, flags, capital, population, languages } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    if (!languages) {
        return null;
    }
    const language = Object.values(languages);
    // console.log(language);

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt={flags.alt} className='flag' />
            <p><b>Capital:</b> {capital}, <b>Population:</b> {population}</p>
            <p><b>Language: </b>{language[0]}</p>

            <div className='flex-button'>
                <button onClick={handleVisited}>{visited ? <span>Visited <i className="fa-solid fa-circle-check"></i></span> : "Travel"}</button>
                <button>Add to List</button>
            </div>


        </div>
    );
};

export default Country;