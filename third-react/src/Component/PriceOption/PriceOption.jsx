import PropTypes from 'prop-types';
import Features from '../Features/Features';

function PriceOption({option}) {
    const {name, price, features} = option;
    return (
        <div className='border-2 border-gray-800 rounded-md shadow-md p-5'>
            <h3 className='text-2xl font-semibold'>{name}</h3>
            <h4><span className='text-4xl font-bold'>{price}</span>/month</h4>
            <ul className='pl-5 pt-5'>
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
            </ul>
        </div>
    );
}

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;