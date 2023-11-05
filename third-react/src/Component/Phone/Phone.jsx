import { useEffect, useState } from "react";
import axios from "axios";
const Phone = () => {
    const [phones, setPhones] = useState([]);
    // useEffect(() => {
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //     .then(res => res.json())
    //     .then(data => setPhones(data.data))
    // }, [])
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(data => console.log(data.data.data))
    .then(data => setPhones(data.data.data))
    return (
        <div>
            <h2 className="text-3xl">Phones: {phones.length}</h2>
        </div>
    );
};

export default Phone;