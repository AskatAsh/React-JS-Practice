import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>This is the Users page of react routing website</p>
            <div>
                {
                    users.map(user => <User key={users.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;