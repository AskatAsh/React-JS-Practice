import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        if (password.length < 6) {
            setMessage("Password should be at least 6 characters long.");
            return;
        }
        else if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9_]).*/.test(password)) {
            setMessage("Password must contain at least one digit, uppercase letter and special character.");
            return;
        }
        setMessage('');
        setSuccess('');

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                setSuccess("Your Information has been Successfully Registered.");
            }).catch(error => {
                setMessage(error.code);
                console.log(error.code);
            })
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col items-center py-10">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6 max-w-xl">Register User and Authentication using firebase and react</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
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

                                <label className="label text-xs">
                                    {message ? <span className="text-red-400">{message}</span>
                                        : <span className="text-green-400">{success}</span>}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;