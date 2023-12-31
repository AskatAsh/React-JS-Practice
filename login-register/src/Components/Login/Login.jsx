import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef(null);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            setErrorMessage("Please write your email address.");
            return;
        }
        else if(!/^\w+@\w+\.\w+$/.test(email)){
            setErrorMessage("Please provide a valid email address.");
            return;
        }
        // console.log(emailRef.current.value);
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Please check you email...");
        }).catch(error => console.log(error))
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setErrorMessage('');
        setSuccess('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                if(result.user.emailVerified){
                    setSuccess("Your Have Successfully logged in.");
                }
                else{
                    alert("Please verify your registered account.");
                }
            }).catch(error => {
                setErrorMessage("The Email or Password you have given is Incorrect..!");
                console.error(error);
            })
    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col items-center py-10 w-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 max-w-xl">Login with email and password using firbase</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" ref={emailRef}
                                type="email" placeholder="email" 
                                className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex items-center relative">
                                    <input name="password" type={showPassword ? "text" : "password"}
                                        placeholder="password" className="input input-bordered flex-1" required />
                                    <span onClick={handleShowPassword} className="text-xl p-2 absolute right-2 rounded-full hover:bg-slate-700 ">
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <label className="label my-2">
                                    <a href="#" onClick={handleResetPassword}
                                    className="label-text-alt text-primary hover:underline">Forgot password?</a>
                                </label>

                                <label className="label text-xs">
                                    {errorMessage ? <span className="text-red-400">{errorMessage}</span>
                                        : <span className="text-green-400">{success}</span>}
                                </label>

                            </div>
                            <div className="form-control mt-3">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                            <p className="text-slate-400 text-xs mt-2">
                                Are you new to this website? <Link to="/register" className="text-primary underline">Register Now!</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;