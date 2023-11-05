import PropTypes from 'prop-types';
import { BsFillPatchCheckFill } from 'react-icons/bs';

function Features({feature}) {
    return (
        <li className='flex items-center gap-2 py-2'><BsFillPatchCheckFill className='text-xl shrink-0'></BsFillPatchCheckFill> {feature}</li>
    );
}

Features.propTypes = {
    feature: PropTypes.string
};

export default Features;