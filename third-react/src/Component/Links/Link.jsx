import PropTypes from 'prop-types';

function Link({route}) {
    return (
        <li className='py-1'><a className='hover:border-b-[3px] hover:border-gray-500' href={route.path}>{route.name}</a></li>
    );
}

Link.propTypes = {
    route: PropTypes.object
};

export default Link;