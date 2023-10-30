import './Country.css';

const Country = ({country}) => {
    // console.log(country);
    // const {name: {common}, flags} = country;
    const {name, flags, capital, population} = country;
    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt={flags.alt} />
            <p><b>Capital:</b> {capital}, <b>Population:</b> {population}</p>
        </div>
    );
};

export default Country;