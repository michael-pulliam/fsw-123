

export default function TodoList(props){
    return(
        props.todos.map((e) => {
            return(
                <li>
                <input type="checkbox"></input>
                <label>{e.text}</label>
                </li>
            )
        })
        
    )

}