import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAppliedJobs } from "../../Utilities/LocalStorage";
import { Helmet } from "react-helmet-async";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    // console.log(id, jobs);
    const foundJob = jobs.find(job => job.id === parseInt(id));
    // console.log(foundJob);
    const { salary, job_description, job_responsibility, educational_requirements, experiences } = foundJob;

    const handleApplyJob = () => {
        saveAppliedJobs(parseInt(id));
        toast("You have Applied Successfully!");
    }
    return (
        <div>
            <Helmet>
                <title>Career Hub | Job Details</title>
            </Helmet>
            <div className="flex justify-center bg-[#faf8ff] py-28 text-[#1A1919]">
                <h2 className="text-4xl font-extrabold">Job Details</h2>
            </div>

            <section className="grid grid-cols-4 justify-center max-w-[1320px] mx-auto gap-6 my-32">
                <div className="col-span-3 text-[#1A1919]">
                    <p className="text-[#474747] mb-6"><span className="font-bold text-[#1A1919]">Job Description: </span>{job_description}</p>
                    <p className="text-[#474747] mb-6"><span className="font-bold text-[#1A1919]">Job Responsibility: </span>{job_responsibility}</p>
                    <p className="text-[#474747] mb-6">
                        <span className="font-bold text-[#1A1919]">Educational Requirements:</span>
                        <br />
                        <span>{educational_requirements}</span>
                    </p>
                    <p className="text-[#474747] mb-6">
                        <span className="font-bold text-[#1A1919]">Experiences:</span>
                        <br />
                        <span>{experiences}</span>
                    </p>
                </div>
                <div className="p-7 rounded-md flex flex-col" style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.10) 0%, rgba(152, 115, 255, 0.10) 100%" }}>
                    <h2 className="text-xl font-extrabold">Job Details</h2>
                    <hr className="my-6" />
                    <p className="text-[#474747]"><span className="text-base font-semibold">Salaray: </span>{salary}</p>
                    <button onClick={handleApplyJob} className="text-lg btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white capitalize font-bold mt-6">Apply Now</button>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;