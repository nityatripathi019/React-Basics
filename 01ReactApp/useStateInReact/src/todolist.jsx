import {useState} from 'react'
import{v4 as uuidv4} from 'uuid';


export default function TodoList(){

let [todos,setTodos] = useState([{task:"sample task",key:uuidv4()}]);
let [newTodo,setNewTodo] = useState("");

let addNewTask =()=>{
    setTodos((prevValue)=>{
     return   [...prevValue,{task:newTodo,key:uuidv4()}]
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

 let updateAll = ()=>{
// console.log("update")
 setTodos(
    todos.map((todo)=>{
        return{
            ...todo,task:todo.task.toUpperCase()
        }
    })
 )
 }
 let updateOne = (id)=>{
    let newtodo = todos.map((prevValue)=>{
        if(prevValue.key===id){
          return  {...prevValue, task:prevValue.task.toUpperCase()}
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
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={()=>{
                deleteTodo(todo.key);
            }}>delete</button>
             &nbsp;&nbsp;&nbsp;
             <button onClick={()=>{
                updateOne(todo.key)
             }}>upperCaseOne</button>
            <br /> <br />
            </li>
            })}
        </ul>
        <button onClick={updateAll}>UpperCaseAll</button>
        </div>
    )
}