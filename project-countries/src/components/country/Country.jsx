const Country = ({country}) => {
    console.log(country);
    const {name: {common}} = country;
    return (
        <div>
            <h3>Name: {common}</h3>
        </div>
    );
};

export default Country;