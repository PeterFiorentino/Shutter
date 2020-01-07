import React from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import HomePage from './HomePage'
import './CSS/AuthForm.css';



class AuthForm extends React.Component {
    constructor(){
        super()

    }
    
    handleSubmit = (e) =>{
        console.log("form submitted")
        e.preventDefault()
        this.props.logIn()
    }

    render(){
        return(
        <div className = "img">
            <img src="https://premiumbpthemes.com/images/clipart-camera-square-8.png" alt="camera"/>
        
        <div className = "AppTwo">
                <h1>Shutter</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input type ="text" placeholder = "Enter Email" required ></input>
                    <button>Login</button>
                </form>
                </div>
            </div>
        )
    }
}



export default AuthForm