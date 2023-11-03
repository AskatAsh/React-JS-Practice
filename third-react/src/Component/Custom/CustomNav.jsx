import { useState } from "react";
import Link from "../Links/Link";
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const CustomNav = () => {
    const [open, setOpen] = useState(false);

    const routesData = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Products", path: "/products" },
        { id: 5, name: "Contact", path: "/contact" }
    ];

    return (
        <nav>
         <div className="md:hidden text-2xl p-2" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose></IoMdClose> : <HiMenuAlt2></HiMenuAlt2>
                }
                {/* <HiMenuAlt2 className="text-2xl"></HiMenuAlt2> */}
            </div>
            <ul className={`md:flex gap-10 duration-500 absolute md:static
            ${open ? 'left-10' : '-left-40'} 
            shadow-xl shadow-gray-300 p-3 border-gray-800 border-2 md:border-none md:shadow-none rounded-md`}>
                {
                    routesData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default CustomNav;