// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Progress: {task}</li>
//     }
// }

export default function Todo({task, isDone}){
    if(isDone){
        return <li>{isDone ? "finished" : "ON going"}: {task}</li>
    }
}