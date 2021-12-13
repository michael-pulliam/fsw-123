
import Todo from "./Todo.js";
export default function TodoList(props){
    return(
        props.todo.map((e) => {
            return(
                <Todo 
                    key = {e.id}
                    todo = {e}
                    completeTodo = {props.completeTodo}
                    deleteTodo = {props.deleteTodo}
                />
            )
        })
        
    )

}
