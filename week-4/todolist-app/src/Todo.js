export default function Todo(props) {
    return(
        <li id={props.todo.key} style={{textDecoration: props.todo.isComplete ? "line-through": ""}}>
        <input type="checkbox" onChange = { () => props.completeTodo(props.todo, props.todo.id)}></input>
        <label>{props.todo.text}</label>
        <button onClick = { () => props.deleteTodo(props.todo.id)}>Delete</button> 
        </li>

    )
}
