import SectionTitle from "../SectionTitle/SectionTitle";

const FeaturedJobs = () => {
    const title = "Featured Jobs";
    const subtitle = "Explore thousands of job opportunities with all the information you need. Its your future";
    return (
        <div>
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
        </div>
    );
};

export default FeaturedJobs;