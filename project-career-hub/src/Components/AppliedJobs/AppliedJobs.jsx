import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJob } from "../../Utilities/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getStoredJob();
        if(jobs.length){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(jobsApplied);
            setAppliedJobs(jobsApplied);
        }
    }, [])

    return (
        <div className="flex flex-col gap-6 max-w-[1320px] mx-auto my-32">
            {
                appliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;