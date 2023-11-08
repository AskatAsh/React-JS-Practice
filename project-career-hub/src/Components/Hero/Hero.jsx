import user from '../../assets/images/user.png'
const Hero = () => {
    return (
        <div className="bg-[#faf8ff]">
            <div className="hero pt-10 max-w-[1320px] mx-auto px-7">
                <div className="hero-content flex-col lg:flex-row-reverse p-0 gap-10 lg:gap-0">
                    <img src={user} className="max-w-full md:max-w-[500px] xl:max-w-[700px] xl:relative xl:-right-20" />
                    <div>
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight lg:leading-snug xl:leading-snug">One Step Closer To Your <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text">Dream Job</span></h1>
                        <p className="py-6 text-[#757575] max-w-[450px]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white capitalize font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;