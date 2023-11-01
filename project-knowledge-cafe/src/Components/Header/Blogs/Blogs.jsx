import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            blogs here
        </div>
    );
};

export default Blogs;