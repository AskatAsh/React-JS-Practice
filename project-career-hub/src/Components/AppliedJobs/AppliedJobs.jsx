import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJob } from "../../Utilities/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";
import downArrow from '../../assets/icons/downArrow.svg'

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [filterData, setFilterData] = useState([]);

    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getStoredJob();
        if (jobs.length) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(jobsApplied);
            setAppliedJobs(jobsApplied);
            setFilterData(jobsApplied);
        }
    }, [jobs])


    const handlefilterData = (filter) => {
        if (filter === "all") {
            // console.log("Selected All");
            // const allApplied = appliedJobs.map(job => job);
            setFilterData(appliedJobs);
            // console.log(allApplied);
        }
        else if (filter === "remote") {
            // console.log("Selected Remote");
            const remoteApplied = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setFilterData(remoteApplied);
            // console.log(remoteApplied);
        }
        else if (filter === "onSite") {
            // console.log("Selected onSite");
            const onsiteApplied = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setFilterData(onsiteApplied);
            // console.log(onsiteApplied);
        }

        console.log(filterData);
    }

    return (
        <div className="max-w-[1320px] mx-auto my-32">
            <div className="flex justify-end my-8">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter By {<img src={downArrow} alt="" className="w-4" />}</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handlefilterData("all")}>All</a></li>
                        <li><a onClick={() => handlefilterData("remote")}>Remote</a></li>
                        <li><a onClick={() => handlefilterData("onSite")}>On Site</a></li>
                    </ul>
                </details>
            </div>

            <div className="flex flex-col gap-6">
                {
                    // appliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                    filterData.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>

    );
};

export default AppliedJobs;