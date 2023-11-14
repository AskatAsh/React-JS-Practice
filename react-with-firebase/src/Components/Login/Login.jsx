import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);

    const handleLogin = () => {
        console.log("clicked the login button");
    }
    return (
        <div style={{marginTop: "40px"}}>
            <button onClick={handleLogin}>Google Login</button>
        </div>
    );
};

export default Login;