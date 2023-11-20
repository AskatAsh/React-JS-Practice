import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
    
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Successfully signed out");
            }).catch(error => console.error(error));
    }

    const navLinks = <>
        <li className='font-semibold text-primary'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-primary'><Link to='/orders'>Orders</Link></li>
        {
            user && <>
                <li className='font-semibold text-primary'><Link to='/dashboard'>Dashboard</Link></li>
                <li className='font-semibold text-primary'><Link to='/profile'>Profile</Link></li>
            </>
        }
    </>

    return (
        <div className='flex justify-between items-center mb-10'>
            <h2 className='font-bold text-xl'>Logo</h2>

            <ul className='flex gap-5 justify-center items-center'>
                {navLinks}
            </ul>

            <ul className='flex gap-5 justify-center items-center'>
                <li className='font-semibold text-blue-700'>
                    {
                        user ? <>
                            <span className="mr-3">{user.email}</span>
                            <button onClick={handleLogOut}
                                className="btn btn-outline btn-primary">Log Out</button>
                        </>
                            : <Link to='/login'>
                                <button className="btn btn-outline btn-primary">Login</button>
                            </Link>
                    }
                </li>
                <li className='font-semibold text-blue-700'>
                    <Link to='/register'>
                        <button className='btn btn-primary'>Register</button>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;