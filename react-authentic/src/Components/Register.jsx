import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setErrorMessage('');
        setSuccess('');

        if (!/(?=.*[A-Z])(?=.*[0-9]).*/.test(password)) {
            setErrorMessage("Password must contain at least one digit and uppercase letter");
            return;
        }

        // send register info to firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setSuccess("Registered Successfully");
                console.log(result);
            })
            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            })
    }

    return (
        <div>
            <div className="hero py-14 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6 max-w-md">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className="relative flex items-center">
                                    <input type={showPassword ? "text" : "password"}
                                        name="password" placeholder="password" 
                                        className="input input-bordered w-full" required />
                                    <span className="absolute right-2" onClick={handleShowPassword}>
                                        {
                                            showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                        }
                                    </span>
                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                {
                                    errorMessage ? <span className="text-xs text-red-400">{errorMessage}</span>
                                        : <span className="text-xs text-green-400">{success}</span>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className="text-xs py-2">Already have an account? <Link href="/register" className="text-primary underline">Login Here</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;