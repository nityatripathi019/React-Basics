import { useState } from "react"
import "./comments.css"
import CommentForm from "./commentForm"
export default function Comments() {
  let [comments, setComments] = useState([{
    username: "diyatripathi019",
    remarks: "Hurray! I got internship",
    rating: 4,
  }])

  let addnewCommnets = (comment) => {
    setComments((currentComments) => {
      return [...currentComments, comment]
    })
  }
  return (
    <div>
      {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <p>Username: {comment.username}</p>&nbsp;
          <span>{comment.remarks}</span><br />
          <span>(rating={comment.rating})</span>
        </div>

      ))}


      <hr />
      <CommentForm addNewComment={addnewCommnets} />
    </div>
  )
}