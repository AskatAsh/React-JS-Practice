import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJob } from "../../Utilities/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";
import downArrow from '../../assets/icons/downArrow.svg'

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getStoredJob();
        if (jobs.length) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(jobsApplied);
            setAppliedJobs(jobsApplied);
        }
    }, [jobs])

    return (
        <div className="max-w-[1320px] mx-auto my-32">
            <div className="flex justify-end my-8">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter By {<img src={downArrow} alt="" className="w-4"/>}</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>

            <div className="flex flex-col gap-6">
                {
                    appliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>

    );
};

export default AppliedJobs;