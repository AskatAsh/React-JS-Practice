import { useEffect, useState } from "react";

const Phone = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => console.log(data.data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Phone;