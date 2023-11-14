import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    // console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            }).catch((error) => {
                console.log("Error: ", error.message);
            })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch((error) => {
            console.log(error);
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
            <div style={{ margin: "40px 0px", display: "flex", justifyContent: "center" }}>
                {
                    user ? <button onClick={handleSignOut}>Sign Out</button>
                        : <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                            <button onClick={handleGoogleLogin}>Google Login</button>
                            <button onClick={handleGithubLogin}>Github Login</button>
                        </div>
                }


            </div>

            {user &&
                <div>
                    <img src={user?.photoURL} alt="" />
                    <h3>Name: {user.displayName}</h3>
                    <p>Email: {user.email || '"Not Available"'}</p>
                </div>
            }
        </div>
    );
};

export default Login;