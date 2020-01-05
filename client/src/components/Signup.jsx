import React from "react"

const SignUp = () =>{
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <label htmlFor = "email">Email Address </label>
                <input  id = "email" type = "text" placeholder = "enter email"/>
                <br/>
                <label htmlFor = "username">User Name </label>
                <input  id = "username" type = "text" placeholder = "enter UserName"/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUp