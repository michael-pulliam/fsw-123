import {useState} from 'react';

export default function TodoForm(props){
    const [userInput, setInput] = useState("");

    const changeState = () => {setInput(document.querySelector("#inputValue").value)}
    
    return(
        <div>
            <input type="text" placeholder="New Todo" id="inputValue" onChange = { () => changeState()}></input>
            <button onClick={ () => props.addTodo(userInput)}>Add</button>
        </div>
    )
}