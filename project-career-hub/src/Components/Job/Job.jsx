import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
    return (
        <div>
            <img src={logo} alt={`Image of ${company_name}`} />
            <h2>{job_title}</h2>
            <p>{company_name}</p>
            <div className='flex gap-2'>
                <span className='px-4 py-2 border-2 border-[#7E90FE] text-[#7E90FE] rounded font-semibold'>{remote_or_onsite}</span>
                <span className='px-4 py-2 border-2 border-[#7E90FE] text-[#7E90FE] rounded font-semibold'>{job_type}</span>
            </div>
            <div className='flex gap-6'>
                <p>{location}</p>
                <p>Salary: {salary}</p>
            </div>
            <Link className="text-lg font-bold btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white capitalize font-bold">View Details</Link>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
};

export default Job;