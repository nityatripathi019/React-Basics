import { useState } from "react"

export default function Form() {
    let [formData, setFormData] = useState({
        fullname: "",
        username: "",
        password: "",
    })
    // let handleInputChange = (event) => {
    //     let fieldName = event.target.name;
    //     let fieldValue = event.target.value;

    //     setFormData((currentData) => {
    //         currentData[fieldName] = fieldValue;
    //         return { ...currentData };
    //     })
    // }
    let handleInputChange = (event) => {
        let fieldname = event.target.name;
        let newValue = event.target.value;
        setFormData((currentData) => {
            return { ...currentData, [fieldname]: newValue }
        })
    }

    function handleSubmit(event) {
        console.log(formData);
        event.preventDefault();
        setFormData({
            fullname: "",
            username: "",
            password: "",
        })
    }
    return (
        <div onSubmit={handleSubmit}>

            <form >
                <label htmlFor="fullname">Fullname:</label>

                <input value={formData.fullname}
                    name="fullname"
                    placeholder="enter full name"
                    id="fullname"
                    onChange={handleInputChange}
                /><br />
                <label htmlFor="username">Usename:</label>
                <input type="text"
                    placeholder="enter username"
                    id="username"
                    value={formData.username}
                    name="username"
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="Password">Password:</label>
                <input type="password"
                    id="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}