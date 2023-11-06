// import { Link, NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            {/* <Link to="/">Home </Link>
            <Link to="/users">Users </Link>
            <Link to="/about">About Us </Link>
            <Link to="/contact">Contact Us</Link> */}
            <NavLink to="/">Home </NavLink>
            <NavLink to="/users">Users </NavLink>
            <NavLink to="/about">About Us </NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
        </div>
    );
};

export default Header;