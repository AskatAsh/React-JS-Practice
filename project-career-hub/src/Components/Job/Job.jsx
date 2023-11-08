import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import locationIcon from '../../assets/icons/Location2.png'
import moneyIcon from '../../assets/icons/money.png'

const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
    return (
        <div className='border-2 rounded-md p-10'>
            <img src={logo} alt={`Image of ${company_name}`} className='mb-8' />
            <h2 className='font-extrabold text-xl md:text-2xl'>{job_title}</h2>
            <p className='font-semibold text-[#757575]'>{company_name}</p>
            <div className='flex gap-2 my-4 font-semibold'>
                <span className='px-4 py-2 border-2 border-[#7E90FE] text-[#7E90FE] rounded'>{remote_or_onsite}</span>
                <span className='px-4 py-2 border-2 border-[#7E90FE] text-[#7E90FE] rounded'>{job_type}</span>
            </div>
            <div className='flex gap-6 text-[#757575] font-semibold mb-8'>
                <p className='flex items-center gap-2'><img src={locationIcon} alt="" />{location}</p>
                <p className='flex items-center gap-2'><img src={moneyIcon} alt="" />Salary: {salary}</p>
            </div>
            <Link className="text-lg btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white capitalize font-bold">View Details</Link>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
};

export default Job;