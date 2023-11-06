import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
const Home = () => {
    return (
        <div>
            <h2>Welcome to React Router Home</h2>
            <Header></Header>
            <Outlet />
        </div>
    );
};

export default Home;