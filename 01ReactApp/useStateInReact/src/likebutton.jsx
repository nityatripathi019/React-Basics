import {useState} from "react";
import React from 'react'

const LikeButton = () => {
 let [isliked,setIsliked]=useState(false);
  let [count,setCount] = useState(0);
    let toggleLike = ()=>{
      
      setIsliked(!isliked);
      setCount(count+1);
    }
    let like = {
    color:"red"
    }
  return (
    <div>
        <h3>States in React</h3>
       <p>Count no of clicks : {count}</p>
       <h3 onClick={toggleLike}>
        {isliked?
        <i className="fa-solid fa-heart" style={like} ></i>: <i className="fa-regular fa-heart" ></i>}
       </h3>
    </div>
  )
}

export default LikeButton
