import PropTypes from 'prop-types';
// import { Link, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, phone, email, website} = user;
    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/user/${id}`);
    }
    return (
        <div style={{border: "2px solid #ccc", borderRadius: "10px", margin: "10px", padding: "10px"}}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            {/* <Link to={`/user/${id}`}>Show Details</Link> */}
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;