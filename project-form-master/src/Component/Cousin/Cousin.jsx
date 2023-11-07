import PropTypes from 'prop-types';

const Cousin = ({cousin}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{cousin}</p>
        </div>
    );
};
Cousin.propTypes = {
    cousin: PropTypes.string
};
export default Cousin;