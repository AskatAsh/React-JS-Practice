import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('');
    const nameState = useInputState('');
    const emailState = useInputState('');
    const phoneState = useInputState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Name: ', nameState.value);
        console.log('Email: ', emailState.value);
        console.log('Phone: ', phoneState.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} */}
                <input {...nameState}
                type="text" name="name" placeholder="Your name"/>
                <br />
                <input {...emailState}
                type="email" name="email" placeholder="Your email" />
                <br />
                <input {...phoneState}
                type="number" name="phone" placeholder="Your phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;