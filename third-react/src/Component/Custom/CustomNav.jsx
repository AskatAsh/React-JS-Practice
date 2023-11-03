import Link from "../Links/Link";
import { FaBeer } from 'react-icons/fa';

const CustomNav = () => {
    const routesData = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Products", path: "/products" },
        { id: 5, name: "Contact", path: "/contact" }
    ];

    return (
        <nav>
            <FaBeer></FaBeer>
            <ul className="md:flex gap-10">
                {
                    routesData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default CustomNav;