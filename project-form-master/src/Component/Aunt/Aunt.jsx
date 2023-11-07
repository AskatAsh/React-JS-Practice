import Cousin from "../Cousin/Cousin";

const Aunt = () => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className="flex">
                <Cousin cousin={"Shohan"}></Cousin>
                <Cousin cousin={"Abrar"}></Cousin>
            </section>
        </div>
    );
};

export default Aunt;