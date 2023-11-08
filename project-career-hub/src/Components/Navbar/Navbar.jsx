import { NavLink } from "react-router-dom";

const Navbar = () => {
    const lists = <>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/jobs">Applied Jobs</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
    </>
    return (
        <div className="bg-[#faf8ff] pt-12">
            <div className="navbar max-w-[1320px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                            {lists}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl font-extrabold">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {lists}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white capitalize font-bold">Star Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;