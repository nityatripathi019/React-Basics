import {useState} from 'react'
import{v4 as uuidv4} from 'uuid';


export default function TodoList(){

let [todos,setTodos] = useState([{task:"sample task",key:uuidv4(),isDone:false}]);
let [newTodo,setNewTodo] = useState("");

let addNewTask =()=>{
    setTodos((prevValue)=>{
     return   [...prevValue,{task:newTodo,key:uuidv4(),isDone:false}]
    } )
    setNewTodo("")
}
 let updateTodoValue = (event)=>{
    setNewTodo(event.target.value)
 }

 let deleteTodo = (id)=>{
    console.log(id)

    let newtodos = todos.filter((todo)=>todo.key!=id)
    setTodos(newtodos)

 }

 let markDoneAll = ()=>{
// console.log("update")
 setTodos(
    todos.map((todo)=>{
        return{
            ...todo,isDone:true
        }
    })
 )
 }
 let markAsDone = (id)=>{
    let newtodo = todos.map((prevValue)=>{
        if(prevValue.key===id){
          return  {...prevValue, isDone:true}
        }else{
            return prevValue
        }
    })
    setTodos(newtodo)
 }
    return(
        <div>
       <h3>Todo list</h3>
       <input type="text" value={newTodo} placeholder='enter new task' onChange={updateTodoValue} /><br /><br />
       <button onClick={addNewTask}>Add new task</button>
        <br /><br /><br />
        <hr />
        <h3>Task todo</h3>
        <ul>
            {todos.map((todo)=>{
           return <li key={todo.key}>
            <span style={todo.isDone?{textDecoration:"line-through"}:{}}>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={()=>{
                deleteTodo(todo.key);
            }}>delete</button>
             &nbsp;&nbsp;&nbsp;
             <button onClick={()=>{
                markAsDone(todo.key)
             }} >Mark as done</button>
            <br /> <br />
            </li>
            })}
        </ul>
        <button onClick={markDoneAll}>MarkDoneAll</button>
        </div>
    )
}