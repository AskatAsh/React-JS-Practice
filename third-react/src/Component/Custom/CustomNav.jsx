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
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose className="text-2xl"></IoMdClose> : <HiMenuAlt2 className="text-2xl"></HiMenuAlt2>
                }
                {/* <HiMenuAlt2 className="text-2xl"></HiMenuAlt2> */}
            </div>
            <ul className="md:flex gap-10">
                {
                    routesData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default CustomNav;