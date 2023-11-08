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
        <div>
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            <p>Number of Jobs: {jobs.length}</p>
            {
                jobs.map(job => <Job key={job.id} job={job}></Job>)
            }
        </div>
    );
};

export default FeaturedJobs;