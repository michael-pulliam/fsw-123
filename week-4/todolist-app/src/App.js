import { useState } from 'react';
import todos from './STORE';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from 'uuid';


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
  const addTodo = text => {
    const todoList = [...todo];
    const newTodo = {id: uuidv4(), text: `${text}`, isCompleted: false};
    todoList.push(newTodo);
    setTodo(todoList);
  }
  
  return(
    <div>
      <h1>ToDo List</h1>
      <TodoForm addTodo = {addTodo}/>
      <ul>
        <TodoList 
          todo = {todo}
          completeTodo = {completeTodo}
          deleteTodo = {deleteTodo}
        />
        </ul>
    </div>
  )

}
// Create a state variable called todos to store the array of todos.

// The default value for this todos state variable will be the imported array from STORE.js

// Create a function (completeTodo) to update the isCompleted property of a single todo.