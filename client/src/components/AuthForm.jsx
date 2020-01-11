import React from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import HomePage from './HomePage'
import './CSS/AuthForm.css';



class AuthForm extends React.Component {
    
    
    handleSubmit = (e) =>{
        console.log("form submitted")
        e.preventDefault()
        this.props.logIn()
    }

    render(){
        return(
        <div className = "container">
              {/* <img id="camera" src="https://premiumbpthemes.com/images/clipart-camera-square-8.png" alt="camera"/> */}
        
        <div className = "AppTwo">
            </div>

            <div className="form">
            <form id="login" onSubmit = {this.handleSubmit}>
                    <input className= "login" type ="text" placeholder = "Enter Email" required ></input>
                    <button className="loginBtn">Login</button>
             <button className="signBtn">
            <Link to = "/SignUp">Sign Up</Link>
            </button>
            
            </form>
            </div>
            </div>
        )
    }
}



export default AuthForm