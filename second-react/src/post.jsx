import './Friends.css'
export default function Post({post}){
    const {title, body} = post;

    return (
        <div className='friends'>
            <h4>Title: {title}</h4>
            <p>{body}</p>
        </div>
    )
}