import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <Link to="/">Home </Link>
            <Link to="/users">Users </Link>
            <Link to="/about">About Us </Link>
            <Link to="/contact">Contact Us</Link>
        </div>
    );
};

export default Header;