import { useState } from 'react';
import todos from './STORE';
import TodoList from './TodoList';

export default function App(props){

  const [todo, setTodo] = useState(todos)

  const deleteTodo = (i) => {
    const newDelete = [...todo]
    const targetItem = newDelete.findIndex(e => e.id === i)
    newDelete.splice(targetItem, 1)
    setTodo(newDelete)
  }

  const completeTodo = (e,i) => {
    const newComplete = [...todo]
    const targetItem = newComplete.findIndex(e => e.id === i)
    if(e.isComplete === false){
      e.isComplete = true;
    }else if(e.isComplete === true){
      e.isComplete = false;
    }
    newComplete.splice(targetItem, 1, e)
    setTodo(newComplete)
  }
  
  return(
    <ul>
    <TodoList 
      todo = {todo}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
    </ul>
  )

}
// Create a state variable called todos to store the array of todos.

// The default value for this todos state variable will be the imported array from STORE.js

// Create a function (completeTodo) to update the isCompleted property of a single todo.