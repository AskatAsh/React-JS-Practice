import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin cousin={"Amina"}></Cousin>
                <Cousin cousin={"Jafor"}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;