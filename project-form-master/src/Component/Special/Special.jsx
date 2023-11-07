import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({ring}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Special</h2>
            <p>Got: {ring}</p>
            <p>Also Got: {gift}</p>
        </div>
    );
};

export default Special;