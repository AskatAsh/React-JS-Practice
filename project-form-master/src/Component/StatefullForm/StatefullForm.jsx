import { useState } from "react";

const StatefullForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(name, email, phone);
    }

    const handleNameChange = e => {
        // console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePhoneChange = e => {
        // console.log(e.target.value);
        setPhone(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange}
                type="text" name="name" placeholder="Your name" />
                <br />
                <input onChange={handleEmailChange}
                type="email" name="email" placeholder="Your email" />
                <br />
                <input onChange={handlePhoneChange}
                type="number" name="phone" placeholder="Your phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefullForm;