const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(e.target);
        console.log(e.target.name.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your name"/>
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

export default SimpleForm;