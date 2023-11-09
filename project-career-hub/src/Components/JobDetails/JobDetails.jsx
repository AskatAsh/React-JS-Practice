import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    // console.log(id, jobs);
    const foundJob = jobs.find(job => job.id === parseInt(id));
    // console.log(foundJob);
    const { job_description } = foundJob;
    return (
        <div>
            <div className="flex justify-center bg-[#faf8ff] py-28">
                <h2 className="text-4xl font-extrabold">Job Details</h2>
            </div>

            <section className="grid grid-cols-4 justify-center max-w-[1320px] mx-auto gap-6 my-32">
                <div className="col-span-3">
                    <p><span className="font-bold">Job Description: </span>{job_description}</p>
                </div>
                <div className="">
                    <h2>Job Details</h2>
                </div>
            </section>

        </div>
    );
};

export default JobDetails;