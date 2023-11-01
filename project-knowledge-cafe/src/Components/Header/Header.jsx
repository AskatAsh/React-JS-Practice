import profile from '../../assets/Images/profile.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between'>
            <h1 className="text-3xl font-bold">React Knowledge Cafe</h1>
            <img src={profile} alt="User profile picture" />
        </div>
    );
};

export default Header;