
const Login = () => {

    const handleLogin = () => {
        console.log("clicked the login button");
    }
    return (
        <div style={{marginTop: "40px"}}>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;