import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext)

    return (
        <div>
            <h1 className='text-4xl font-bold'>{authInfo.name}</h1>
        </div>
    );
};

export default Home;