
import { useState } from "react";
import "./lottery.css"
import { genRandomNo,sum} from "./helper";

//first way of creating lottery game
// export default function Lottery() {
//     const [generateNo, setGenerateNo] = useState("000");
//     const [message, setMessage] = useState("");
  
//     // Function to generate a random 3-digit number
//     function generateRandomNo() {
//       let number = Math.floor(Math.random() * 1000);
//       let newNo = number.toString().padStart(3, "0");
//       return newNo;
//     }
  
//     // Function to handle the button click and check the number
//     const generatedNo = () => {
//       let newNumber = generateRandomNo();
//       setGenerateNo(newNumber); // Update the generated number
//       checkNo(newNumber); // Check the number immediately
//     };
  
//     // Function to check if the sum of digits equals 15
//     const checkNo = (number) => {
//       let sum = number
//         .split("") // Split the number into individual digits
//         .reduce((acc, digit) => acc + parseInt(digit), 0); // Calculate the sum
//       if (sum === 15) {
//         setMessage("Congratulations! You won!");
//       } else {
//         setMessage(""); // Clear the message if the sum is not 15
//       }
//     };
  
//     return (
//       <div>
//         <div className="activity">
//           <p>Lottery Ticket = {generateNo}</p>
//           <button onClick={generatedNo}>Get New Ticket</button>
//           <p>{message}</p>
//         </div>
//       </div>
//     );
//   }
 
//2nd way of creating lottery game
export default function Lottery(){
    let [ticket,setTicket]  = useState(genRandomNo(3))
   
    let isWining = sum(ticket) ===15;
    function getRandom(){
        setTicket(genRandomNo(3))
    }
    return(
        <div>
           <h3>Lottery game!</h3>
           <h3>{isWining && "Congratulation ,you won!"}</h3>
           <div className="ticket">
           <span>{ticket[0]}</span>
           <span>{ticket[1]}</span>
           <span>{ticket[2]}</span>
           </div>
          
          <br />
         <button onClick={getRandom}>Buy New Ticket</button>
        </div>
    )
}

  