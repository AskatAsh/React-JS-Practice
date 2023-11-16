import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mb-10'>
            <h2 className='font-bold text-xl'>Logo</h2>

            <ul className='flex gap-5 justify-center items-center'>
                <li className='font-semibold text-primary'><Link to='/'>Home</Link></li>
            </ul>

            <ul className='flex gap-5 justify-center items-center'>
                <li className='font-semibold text-blue-700'>
                    <Link to='/login'>
                        <button className="btn btn-outline btn-primary">Login</button>
                    </Link>
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