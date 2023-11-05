import PropTypes from 'prop-types';

function PriceOption({option}) {
    const {name, price, feature} = option;
    return (
        <div className='border-2 border-gray-800 rounded-md shadow-md'>
            <h3 className='text-2xl font-semibold'>{name}</h3>
            <h4><span className='text-4xl font-bold'>{price}</span>/month</h4>
        </div>
    );
}

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;