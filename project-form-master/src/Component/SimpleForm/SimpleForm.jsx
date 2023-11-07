const SimpleForm = () => {
    return (
        <div>
            <form>
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