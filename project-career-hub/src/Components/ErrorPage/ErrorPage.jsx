import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>
            <Link className="btn">Go back Home</Link>
        </div>
    );
};

export default ErrorPage;