// function App(){
//     const [text, setText] = useState({
//         text: "Shopping"
//     });
//     const changeText = () => {

//         const newText = {
//             text: "Sleep"
//         }
//         setText(newText);
//     }
//     return (
//         <div className = "app">


//         </div>
//     )
// }
function App(){
    const [todos, setTodos] = useState( [
        {text: "goto gym"},
        {text: "do laundry"},
        {text: "food shopping"},
        {text: "do homework"}
    ]);
    const changeTodos = (text) => {
        const newTodos = [...todos,
            {text: text}   
        ]
        setTodos(newTodos)
    }
    const todoList = todos.map((e, i) => <div key={i}>{e.text}</div>)

    return (
        <div className="app">
            <h1>Todo List</h1>
            <div>{todoList}</div>
            <button onClick = {
                changeTodos()
            }>Add Todo</button>
        </div>
    )
}