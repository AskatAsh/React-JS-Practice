import './Friends.css'
export default function Friend({friend}){
    const {name, email, website} = friend;
    // const friendStyle = {
    //     border: '2px solid lightgreen',
    //     borderRadius: '10px',
    //     padding: '10px',
    //     margin: '10px'
    // }
    return (
        <div className='friends'>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Website: {website}</h4>
        </div>
    )
}