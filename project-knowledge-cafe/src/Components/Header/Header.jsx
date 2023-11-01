import profile from '../../assets/Images/profile.png'
const Header = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">React Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;