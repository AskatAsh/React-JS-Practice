import PropTypes from 'prop-types';

function PriceOption({option}) {
    const {name, price, feature} = option;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
}

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;