import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useContext, useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";


const Login = () => {
    const navigate = useNavigate();
    const {loginUser, googleSignIn} = useContext(AuthContext);
    
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            setErrorMessage("Please enter your email");
            return;
        }
        else if (!/^\w+@\w+\.\w+$/.test(email)) {
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

        if (!/^\w+@\w+\.\w+$/.test(email)) {
            setErrorMessage("Please enter a valid email");
            return;
        }
        // use function from context to send login
        loginUser(email, password)
        .then(result => {
                    if (result.user.emailVerified) {
                        console.log(result);
                        setSuccess('Login Successful');
                        navigate("/");
                    }
                    else{
                        setErrorMessage('Please verify your email address')
                    }
                    
                })
                .catch(error => {
                    setErrorMessage(error.message);
                    console.error(error);
                })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result);
        }).catch(error => {
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
                                <div className="relative flex items-center">
                                    <input type={showPassword ? "text" : "password"}
                                        name="password" placeholder="password"
                                        className="input input-bordered w-full" required />
                                    <span className="absolute right-2" onClick={handleShowPassword}>
                                        {
                                            showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
                                        }
                                    </span>
                                </div>

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
                            <p className="text-xs pt-2">Don&apos;t have an account? <Link to="/register" className="text-primary underline">Register Here</Link></p>
                            <div className="divider">OR</div>
                            <p className="btn border border-primary" onClick={handleGoogleSignIn}>Sign in with Google</p>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;