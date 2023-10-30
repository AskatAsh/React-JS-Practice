import './Country.css';

const Country = ({country}) => {
    console.log(country);
    const {name: {common}, flags} = country;
    return (
        <div className='country'>
            <h3>Name: {common}</h3>
            <img src={flags.png} alt={flags.alt} />
        </div>
    );
};

export default Country;