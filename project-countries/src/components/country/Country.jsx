import './Country.css';

const Country = ({country}) => {
    console.log(country);
    const {name: {common}} = country;
    return (
        <div className='country'>
            <h3>Name: {common}</h3>
        </div>
    );
};

export default Country;