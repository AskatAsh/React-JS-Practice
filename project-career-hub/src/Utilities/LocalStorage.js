const getStoredJob = () => {
    const getAppliedJob = localStorage.getItem('job_applied');
    if (getAppliedJob) {
        return JSON.parse(getAppliedJob);
    }
    return [];
}
const saveAppliedJobs = id => {
    const storedAppliedJob = getStoredJob();
    const exists = storedAppliedJob.find(jobId => jobId === id);
    if(!exists){
        storedAppliedJob.push(id);
        localStorage.setItem('job_applied', JSON.stringify(storedAppliedJob));
    }
}

export { getStoredJob, saveAppliedJobs };