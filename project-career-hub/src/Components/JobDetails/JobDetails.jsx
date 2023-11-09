import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const [loadedJobs, setLoadedJobs] = useState([]);
    const jobs = useLoaderData();
    const {id} = useParams();
    // console.log(id, jobs);
    {
        const foundJob = jobs.find(job => job.id == id);
        console.log(foundJob);
        // setLoadedJobs(foundJob);
    }
    
    return (
        <div>
            <div className="flex justify-center bg-[#faf8ff] py-28">
                <h2 className="text-4xl font-extrabold">Job Details</h2>
            </div>
        </div>
    );
};

export default JobDetails;