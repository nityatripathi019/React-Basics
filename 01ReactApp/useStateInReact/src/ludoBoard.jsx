import {useState} from 'react'



// export default function LudoBoard(){
//  let [moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0})
// //   let [arr,setArr] = useState(["no moves"])
//  function updateBlue(){
//    setMoves((prevValue)=>{
//      return   {...prevValue,blue:prevValue.blue +=1}
//     });

//     // arr.push("blue move")
//     // setArr([...arr]);
//     // console.log(arr);
//  }
  
//  function updateYellow(){
//     setMoves((preValue)=>{
//         return{...preValue,yellow:preValue.yellow+1}
//     })
//  }

//  function updateGreen(){
//     setMoves((preValue)=>{
//         return{...preValue,green:preValue.green+1}
//     })
//  }

//  function updateRed(){
//     setMoves((preValue)=>{
//         return{...preValue,red:preValue.red+1}
//     })
//  }
//     return(
//         <div>
//          <p>Game Begins</p>
//          {/* <p>{arr}</p> */}
//          <div className="Board">
//           <p>Blue moves = {moves.blue}</p>
//           <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
//           <p>Yellow moves ={moves.yellow}</p>
//           <button onClick={updateYellow} style={{backgroundColor:"yellow",color:"black"}}>+1</button>
//           <p>Green moves ={moves.green}</p>
//           <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
//           <p>Red moves ={moves.red}</p>
//           <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
//          </div>
//         </div>
//     )
// }

//activity

export default function LudoBoard (){
  let [generateNo,setGenerateNo]=useState(0)
    function generateRandomNo(){
      let number = Math.floor(Math.random()*1000)
      let newNo = number.toString().padStart(3,'0');
      return (newNo)
    }

    let generatedNo = ()=>{
      setGenerateNo(generateRandomNo);
      checkNo();
    }
    
    let checkNo = ()=>{
      let number = generateNo ;
      console.log(number)
      // let Sdigit = 0;
      // while(number!=0){
      //  let rem = number %10;
      //  Sdigit += rem;
      //  number = number/10;
      // }
      // console.log(Math.abs(Sdigit));
    }
return(
    <div>
   
   <div className="activity">
    <p>Lottery Ticket = {generateNo}</p>
    <button onClick={generatedNo}>Get New Ticket</button>
   </div>
    </div>
)
}