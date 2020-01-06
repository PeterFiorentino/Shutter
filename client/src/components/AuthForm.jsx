import React from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import HomePage from './HomePage'



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
            <div>
                <h1>Slide</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input type ="text" placeholder = "enter email" required = "required"></input>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}



export default AuthForm