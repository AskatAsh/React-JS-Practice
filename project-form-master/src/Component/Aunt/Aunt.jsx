import Cousin from "../Cousin/Cousin";

const Aunt = ({ring}) => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className="flex">
                <Cousin cousin={"Shohan"} ring={ring}></Cousin>
                <Cousin cousin={"Abrar"}></Cousin>
            </section>
        </div>
    );
};

export default Aunt;