import { useState } from "react"

export default function CommentForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  })

  let handleInputChange = (event) => {
    let fieldname = event.target.name;
    let newValue = event.target.value;

    setFormData((currentData) => {
      return ({ ...currentData, [fieldname]: newValue })
    })
  }
  function handleInput(event) {
    console.log(formData);
    addNewComment(formData)
    event.preventDefault();

    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    })
  }
  return (
    <>
      <h1>Leave a comment!</h1>
      <form onSubmit={handleInput} >
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <br /><br />
        <label htmlFor="Remarks">Remarks: </label>
        <textarea id="Remarks" name="remarks" value={formData.remarks} onChange={handleInputChange}>Remarks</textarea>
        <br /><br />
        <label htmlFor="rating">Rating: </label>
        <input type="number" placeholder="rating" min={1} max={5} id="rating" name="rating" value={formData.rating} onChange={handleInputChange} />
        <br /><br />
        <button>Add Comment</button>
      </form>
    </>

  )
}