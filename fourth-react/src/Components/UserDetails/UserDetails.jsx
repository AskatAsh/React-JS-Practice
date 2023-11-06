import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, phone, website, company, address} = user;
    return (
        <div>
            <h2>Details About User: {name}</h2>
            <p>Company Name: {company.name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Address: {address.suite}, {address.street}, {address.city}, {address.zipcode}</p>
        </div>
    );
};

export default UserDetails;