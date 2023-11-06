import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>This is the Users page of react routing website</p>
        </div>
    );
};

export default Users;