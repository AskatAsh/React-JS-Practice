import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself></Myself>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Dad;