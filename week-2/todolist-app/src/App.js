import todos from './STORE';
import TodoList from './TodoList';

export default function App(props){
  return(
    <ul>
    <TodoList todos = {todos}/>
    </ul>
  )

}