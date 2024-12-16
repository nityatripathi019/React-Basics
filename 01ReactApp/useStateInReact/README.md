# Events in React

# State in React
The state is built-in React object that is used to contain  data or information about the component . 
A component's state can change over time; whenever it changes , the component re-renders.


# Hooks 
Hooks were new addition in React 16.8.
They let you use  state and other React features without writing a class.

Basically hooks hmare aise functions ya methods jo hme state ko use krna allow krte aur other features istemal kr skte h react..

# useState()
useState is a React Hook that lets u add a state variable to ur component.

const[state,setState] = useState(initialState);

## useState returns an array with exactly two values;
The current state. During the first render , it will match the initialState you have passed.
The set function that lets you update the state to a different value and trigger a re-render.

useState function always return an array with two elemnts with first is value and other one is fucntion..
in useState this setState method is ressponsible for re rendering of dom

#todolist image
<img src="./assets/todolist.png " >
