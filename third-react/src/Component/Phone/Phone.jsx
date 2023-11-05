// import { useEffect, useState } from "react";
import { useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


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
        <div className='flex flex-col items-center my-20'>
            <h2 className="text-3xl font-semibold my-10">Phones: {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={'name'} />
                <YAxis />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default Phone;