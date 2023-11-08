import PropTypes from 'prop-types';

const Job = ({job}) => {
    const {logo, company_name} = job;
    return (
        <div>
            <img src={logo} alt={`Image of ${company_name}`} />
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
};

export default Job;