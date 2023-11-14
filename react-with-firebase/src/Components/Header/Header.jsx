import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Header;