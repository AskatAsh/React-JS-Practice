import { useState } from "react";

const StatefullForm = () => {
    const [name, setName] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(name);
    }

    const handleNameChange = e => {
        // console.log(e.target.value);
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange}
                type="text" name="name" placeholder="Your name" />
                <br />
                <input type="email" name="email" placeholder="Your email" />
                <br />
                <input type="number" name="phone" placeholder="Your phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefullForm;