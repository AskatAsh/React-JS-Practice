import PropTypes from 'prop-types';

function Link({route}) {
    return (
        <li className='py-1'><a className='hover:bg-slate-700 hover:text-white px-2 py-1 hover:duration-500 rounded-md' href={route.path}>{route.name}</a></li>
    );
}

Link.propTypes = {
    route: PropTypes.object
};

export default Link;