import React from "react"
import {Route} from 'react-router-dom'
import './CSS/Signup.css';


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
                    <label htmlFor = "email">Email Address </label>
                    <input  
                    id = "email" 
                    type = "text"
                    value = {email}
                    onChange = {this.handleEmailChange} 
                    placeholder = "enter email" 
                    required = "required"/>
                    <br/>
                    <label htmlFor = "username">User Name </label>
                    <input  
                    id = "username" 
                    type = "text" 
                    value = {username}
                    onChange = {this.handleUserNameChange}
                    placeholder = "enter UserName" 
                    required = "required"/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        )

    }
    
    
}

export default SignUp