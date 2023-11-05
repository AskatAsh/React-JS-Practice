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
    .then(data => {
        const phonesData = data.data.data;
        const phonesFakeData = phonesData.map(phone => {
            const obj = {
                name: phone.phone_name,
                price: parseInt(phone.slug.split('-')[1])
            }
            return obj;
        })
        // console.log(phonesFakeData);
        setPhones(phonesFakeData);
    })
    return (
        <div>
            <h2 className="text-3xl">Phones: </h2>
        </div>
    );
};

export default Phone;