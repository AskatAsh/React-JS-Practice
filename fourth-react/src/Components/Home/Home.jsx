import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Home = () => {
    return (
        <div>
            <h2>Welcome to React Router Home</h2>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Home;