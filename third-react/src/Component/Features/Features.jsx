import PropTypes from 'prop-types';

function Features({feature}) {
    return (
        <li>{feature}</li>
    );
}

Features.propTypes = {
    feature: PropTypes.string
};

export default Features;