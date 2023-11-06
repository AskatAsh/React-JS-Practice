import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, phone, email, website} = user;
    return (
        <div style={{border: "2px solid #ccc", borderRadius: "10px", margin: "10px", padding: "10px"}}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;