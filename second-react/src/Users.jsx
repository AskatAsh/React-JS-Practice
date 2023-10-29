import { useEffect, useState } from "react"

export default function Users() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
    }, [])

    return (
        <div>
            <h3>Users: </h3>
        </div>
    )
}