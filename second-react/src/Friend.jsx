export default function Friend({friend}){
    const friendStyle = {
        border: '2px solid lightgreen',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={friendStyle}>
            <h4>Name: {friend.name}</h4>
            <h4>Email: {friend.email}</h4>
            <h4>Website: {friend.website}</h4>
        </div>
    )
}