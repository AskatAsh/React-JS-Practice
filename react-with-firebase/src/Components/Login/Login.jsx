import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
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

    const handleSignOut = () => {
        signOut(auth)
            .then((result) => {
                console.log(result);
                setUser(null);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            <div style={{ margin: "40px 0px", display: "flex", gap: "10px", justifyContent: "center" }}>
                {
                    user ? <button onClick={handleSignOut}>Sign Out</button>
                        : <button onClick={handleGoogleLogin}>Google Login</button>
                }


            </div>

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