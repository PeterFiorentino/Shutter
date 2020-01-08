import React from 'react';
import {Link,Route,Switch} from 'react-router-dom'
import './App.css';
import AuthForm from "./components/AuthForm"
import SignUp from "./components/Signup"
import HomePage from "./components/HomePage"


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userLoggedIn: false,
      userName: ""
    }
  }
  
  logIn = () =>{
    this.setState({
      userLoggedIn: true
    })
  }

  signOut = () =>{
    this.setState({
      userLoggedIn: false
    })
  }


  signUp = (userName) =>{
    this.setState({
      userLoggedIn: true,
      userName: userName
    })

  }
    
  render(){
      let {userLoggedIn} = this.state

      if (!userLoggedIn){
        return(
        <div className = "App">
        <header className="headerLinks">
         <h1> Shutter </h1>
            <button className="signBtn">
            <Link to = "/SignUp">Sign Up</Link>
            </button>
            
          
            </header>
          
          <Switch>
          {/* home page route for when the user is not logged in*/}
          <Route exact path = "/"   
                render = {
                  (routeProps) =>{ 
                  return( 
                  <AuthForm 
                  logIn={this.logIn}
                  userLoggedIn = {this.state.userLoggedIn}/>)
                  }
                }/>
          {/* sign up route for when a user wants to create an account */}
          <Route path = "/SignUp"  render = {
            (routeProps) =>{
              return(
                <SignUp history = {routeProps.history} signUp = {this.signUp}/>
              )
            }
          }/>
          </Switch>
          </div>
        )
              
        }else{
      
      return(
        <div className = "App">
          <nav>
            <Link to = "/">Shutter</Link> {" "}
            <button onClick = {this.signOut}>Sign Out</button>
          </nav>
            <Switch>
              <Route path = "/" render = {
                (routeProps) =>{
                  return(
                    <HomePage userName = {this.state.userName}/>
                  )
                }
              }/>
            </Switch>
        </div>
      )
    }
  }
}
          
          
      

export default App;
