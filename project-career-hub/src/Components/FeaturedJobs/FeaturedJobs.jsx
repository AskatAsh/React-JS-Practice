import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const title = "Featured Jobs";
    const subtitle = "Explore thousands of job opportunities with all the information you need. Its your future";

    const [showJobs, setShowJobs] = useState(4);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div className="px-5">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            {/* <p>Number of Jobs: {jobs.length}</p> */}
            <div className="grid justify-center gap-5 mt-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 648px))" }}>
                {
                    jobs.slice(0, showJobs).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`flex justify-center my-10 ${showJobs == jobs.length ? 'hidden' : ''}`}>
                <button className= "text-lg btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white capitalize font-bold">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;