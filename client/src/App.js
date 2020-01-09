import React from 'react';
import {Link,Route,Switch} from 'react-router-dom'
import './App.css';
import AuthForm from "./components/AuthForm"
import SignUp from "./components/Signup"
import HomePage from "./components/HomePage"
import Profile from "./components/Profile"
import imageDisplay from './components/DisplayProfile';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userLoggedIn: false,
      userName: "",
      email: ""
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


  signUp = (userName, email) =>{
    this.setState({
      userLoggedIn: true,
      userName: userName,
      email: email
    })

  }
    
  render(){
      let {userLoggedIn} = this.state

      if (!userLoggedIn){
        return(
        <div className = "App">
        
         <h1> Shutter </h1>
            <button className="signBtn">
            <Link to = "/SignUp">Sign Up</Link>
            </button>
            
          
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
              
              <Route path = "/profile" render = {
                (routeProps) => {
                  return(
                    <Profile userName = {this.state.userName}/>
                  )
                }
               } />
              <Route path = "/" render = {
                (routeProps) =>{
                  return(
                    <HomePage userName = {this.state.userName}
                    email = {this.state.email}/>
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
