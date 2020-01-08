import React from "react"
import {Route} from 'react-router-dom'
import './CSS/Signup.css';

<<<<<<< HEAD

=======
>>>>>>> 55151adff2732759f41f29aef52b308018a943ac
class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            email: ""
        }
    }
    
    handleFormSubmit = (e) =>{
        e.preventDefault()
        console.log("clicked")
        this.props.history.push("/")
        this.props.signUp(this.state.username)

    }

    handleEmailChange = (e) =>{
        console.log("email changed",e.target.value)
        this.setState({
            email: e.target.value
        })
    }

    handleUserNameChange = (e) =>{
        console.log("userName changed",e.target.value)
        this.setState({
            username: e.target.value
        })
    }

    
    render(){
        let {email, username} = this.state

        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit = {this.handleFormSubmit}>
                <label htmlFor = "Firstname ">Firstname: </label>
                    <input  
                    id = "fname" 
                    type = "text"
                    // value = {firstname}
                    placeholder = "Enter Firstname" 
                    required = "required"/>
                    <br/>

                    <label htmlFor = "Lastname ">Lastname: </label>
                    <input  
                    id = "Lname" 
                    type = "text"
                    // value = {Lastname}
                    placeholder = "Enter Lastname" 
                    required = "required"/>
                    <br/>

                    <label htmlFor = "email"> Email: </label>
                    <input  
                    id = "email" 
                    type = "email"
                    value = {email}
                    onChange = {this.handleEmailChange} 
                    placeholder = "Enter Email" 
                    required = "required"/>
                    <br/>

                    <label htmlFor = "username">Username: </label>
                    <input  
                    id = "username" 
                    type = "text" 
                    value = {username}
                    onChange = {this.handleUserNameChange}
                    placeholder = "Enter Username" 
                    required = "required"/>
                    <br/>
                    <button> Create Account </button>
                </form>
            </div>
        )

    }
    
    
}

export default SignUp