import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJob } from "../../Utilities/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getStoredJob();
        if(jobs.length){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            console.log(jobsApplied);
        }
    }, [])
    return (
        <div>
            <h2>Jobs I applied</h2>
        </div>
    );
};

export default AppliedJobs;