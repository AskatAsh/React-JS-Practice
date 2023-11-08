import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const title = "Featured Jobs";
    const subtitle = "Explore thousands of job opportunities with all the information you need. Its your future";

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div className="px-5">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            <p>Number of Jobs: {jobs.length}</p>
            <div className="grid justify-center gap-5" style={{gridTemplateColumns: "repeat(auto-fit, minmax(300px, 648px))"}}>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

        </div>
    );
};

export default FeaturedJobs;