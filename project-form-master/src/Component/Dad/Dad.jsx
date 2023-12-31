import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Dad = ({ring}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself ring={ring}></Myself>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Dad;