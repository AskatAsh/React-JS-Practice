import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);
    // console.log(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        }).catch((error) => {
            console.log("Error: ", error.message);
        })
    }
    return (
        <div style={{marginTop: "40px"}}>
            <button onClick={handleGoogleLogin}>Google Login</button>
        </div>
    );
};

export default Login;