// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Progress: {task}</li>
//     }
// }

// export default function Todo({task, isDone}){
//         return <li>{isDone ? "finished" : "ON going"}: {task}</li>
// }

// export default function Todo({task, isDone}){
//     return <li>{task} {isDone && ": Done"}</li>
// }
export default function Todo({task, isDone}){
    return <li>{task} {isDone || ": On Going"}</li>
}