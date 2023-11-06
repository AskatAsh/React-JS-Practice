import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oops!!!</h2>
            <h3>{error.status}: {error.statusText || error.message}</h3>
            {
                error.status === 404 && <div>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <Link to="/"><button>Go Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;