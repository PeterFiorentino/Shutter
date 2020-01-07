import React from 'react'



class AuthForm extends React.Component {
    
    
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
                    <input type ="email" placeholder = "enter email" required ></input>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}



export default AuthForm