import PropTypes from 'prop-types';
import Features from '../Features/Features';

function PriceOption({option}) {
    const {name, price, features} = option;
    return (
        <div className='border-2 border-gray-800 rounded-md shadow-md p-5 flex flex-col items-center gap-2'>
            <h3 className='text-2xl font-semibold'>{name}</h3>
            <h4><span className='text-4xl font-bold'>{price}</span>/month</h4>
            <ul className='pl-3 pt-5 flex-grow'>
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
            </ul>
            <button className='btn bg-gray-800 text-white font-bold tracking-wider my-5 w-full'>Purchase</button>
        </div>
    );
}

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;