import PropTypes from 'prop-types';

const User = ({user}) => {
    const {name, phone, email, website} = user;
    return (
        <div style={{border: "2px solid #ccc", borderRadius: "10px", margin: "10px"}}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;