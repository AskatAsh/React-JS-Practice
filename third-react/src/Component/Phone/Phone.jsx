// import { useEffect, useState } from "react";
import { useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { ColorRing } from 'react-loader-spinner'


const Phone = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
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
            setLoading(false);
        })

    return (
        <div className='flex flex-col items-center my-20'>
        {loading && <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}

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