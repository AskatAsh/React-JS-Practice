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
            <ul className="md:flex gap-10">
                {
                    routesData.map(route => <li key={route.id}><a href={route.path}>{route.name}</a></li>)
                }
            </ul>
        </nav>
    );
};

export default CustomNav;