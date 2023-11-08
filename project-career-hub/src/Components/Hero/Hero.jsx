import user from '../../assets/images/user.png'
const Hero = () => {
    return (
        <div className="hero pt-10 max-w-[1320px] mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={user} className="max-w-[700px] relative -right-20" />
                <div>
                    <h1 className="text-7xl font-black leading-snug">One Step Closer To Your <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text">Dream Job</span></h1>
                    <p className="py-6 text-[#757575]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white capitalize font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;