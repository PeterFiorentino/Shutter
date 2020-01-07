import React from 'react';
import {Link,Route,Switch, Redirect} from 'react-router-dom'
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
        <header>
          <div className = "headerLinks">
          
            <Link to = "/"><h2> Shutter </h2></Link>{" "}
            <Link to = "/SignUp"><h2> Sign Up</h2></Link>
          
          </div>

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
                <SignUp signUp = {this.signUp}/>
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
