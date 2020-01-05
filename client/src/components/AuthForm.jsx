import React from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import HomePage from './HomePage'



class AuthForm extends React.Component {
    constructor(){
        super()

    }

    render(){
        return(
            <div>
                <h1>Social Media App</h1>
                <form>
                    <input type ="text" placeholder = "enter email"></input>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}



export default AuthForm