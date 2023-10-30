import './Country.css';

const Country = ({ country }) => {
    // console.log(country);
    // const {name: {common}, flags} = country;
    const { name, flags, capital, population, languages } = country;

    if (!languages) {
        return null;
    }
    const language = Object.values(languages);
    console.log(language);
    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt={flags.alt} className='flag' />
            <p><b>Capital:</b> {capital}, <b>Population:</b> {population}</p>
            <p><b>Language: </b>{language[0]}</p>
        </div>
    );
};

export default Country;