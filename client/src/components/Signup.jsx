import React from "react"
import {Route} from 'react-router-dom'
import './CSS/Signup.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            
                <h1>Create Account </h1>
                <form onSubmit = {this.handleFormSubmit}>
                <label htmlFor = "Firstname ">Firstname: </label>
                    <input className="signupForm"
                    id = "fname" 
                    type = "text"
                    // value = {firstname}
                    placeholder = "Enter Firstname" 
                    required = "required"/>
                    <br/>

                    <label htmlFor = "Lastname ">Lastname: </label>
                    <input  className="signupForm"
                    id = "Lname" 
                    type = "text"
                    // value = {Lastname}
                    placeholder = "Enter Lastname" 
                    required = "required"/>
                    <br/>

                    <i class="fas fa-envelope"></i>
                    <label htmlFor = "email"> Email: </label>
                    <input  className="signupForm"
                    id = "email" 
                    type = "email"
                    value = {email}
                    onChange = {this.handleEmailChange} 
                    placeholder = "Enter Email" 
                    required = "required"/>
                    <br/>

                    <label htmlFor = "username">Username: </label>
                    <input  className="signupForm"
                    id = "username" 
                    type = "text" 
                    value = {username}
                    onChange = {this.handleUserNameChange}
                    placeholder = "Enter Username" 
                    required = "required"/>
                    <br/>
                    <button id="createButton"> Create Account </button>
                </form>
            </div>
        )

    }
    
    
}

export default SignUp