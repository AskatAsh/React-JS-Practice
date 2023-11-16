import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useRef, useState } from "react";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            setErrorMessage("Please enter your email");
            return;
        }
        else if(!/^\w+@\w+\.\w+$/.test(email)){
            setErrorMessage("Please enter a valid email");
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Please check your email");
        })
        .catch(error => {
            console.error(error);
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setErrorMessage('');
        setSuccess('');

        if(!/^\w+@\w+\.\w+$/.test(email)){
            setErrorMessage("Please enter a valid email");
            return;
        }
        // send login info to firebase
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            setSuccess('Login Successful')
            console.log("login successful!");
        })
        .catch(error => {
            setErrorMessage(error.message);
            console.error(error);
        })
    }
    return (
        <div>
            <div className="hero py-14 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 max-w-md">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" ref={emailRef}
                                placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" onClick={handleResetPassword}
                                    className="label-text-alt link link-hover hover:text-primary">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                {
                                    errorMessage ? <span className="text-xs text-red-400">{errorMessage}</span> 
                                    : <span className="text-xs text-green-400">{success}</span>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;