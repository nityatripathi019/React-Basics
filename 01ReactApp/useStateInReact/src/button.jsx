 
 function PrintHello(){
    console.log("Hello");
 }

function printBye(){
    console.log("Bye!");
}
function handleDblClick(){
    console.log("double click event!")
}
export default function Button(){
    return(
        <>
        <button onClick={PrintHello}>Click me</button>
        <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta minus magni tempora sunt? Consequuntur culpa saepe temporibus quas necessitatibus unde?</p>
        <button onDoubleClick={handleDblClick}>dblclick btn</button>
        </>
    )
}