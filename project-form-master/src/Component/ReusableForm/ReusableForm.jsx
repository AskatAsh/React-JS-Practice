// import { Children } from "react";
import PropTypes from 'prop-types';

const ReusableForm = ({formTitle, submitBtnText}) => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Form submitted");
    }

    return (
        <div>
            <h2>{formTitle}</h2>    
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your name"/>
                <br />
                <input type="email" name="email" placeholder="Your email" />
                <br />
                <input type="password" name="password" placeholder="Your password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

ReusableForm.propTypes = {
    formTitle: PropTypes.string,
    submitBtnText: PropTypes.string
};

export default ReusableForm;