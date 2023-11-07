import PropTypes from 'prop-types';
import Special from '../Special/Special';

const Cousin = ({cousin, ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{cousin}</p>
            <section>
                {
                    ring && <Special ring={ring}></Special>
                }
            </section>
        </div>
    );
};
Cousin.propTypes = {
    cousin: PropTypes.string
};
export default Cousin;