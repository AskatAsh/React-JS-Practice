import { useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef}
                type="text" name="name" placeholder="Your name" />
                <br />
                <input ref={emailRef}
                type="email" name="email" placeholder="Your email" defaultValue={"abc@example.com"}/>
                <br />
                <input ref={phoneRef}
                type="number" name="phone" placeholder="Your phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;