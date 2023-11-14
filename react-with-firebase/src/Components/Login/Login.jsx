import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    // console.log(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            }).catch((error) => {
                console.log("Error: ", error.message);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} style={{ margin: "40px 0px" }}>Google Login</button>
            {user &&
                <div>
                    <img src={user?.photoURL} alt="" />
                    <h3>Name: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                </div>
            }
        </div>
    );
};

export default Login;