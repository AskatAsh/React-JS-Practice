import { useState } from "react";

const StatefullForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // console.log("Form submitted");
        if(phone.length < 11){
            setError("Phone number must be 11 characters long!");
        }
        else{
            setError('');
            console.log(name, email, phone);
        }
        
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
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StatefullForm;