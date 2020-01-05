import React from 'react';
import {Link,Route,Switch} from 'react-router-dom'
import './App.css';
import AuthForm from "./components/AuthForm"
import SignUp from "./components/Signup"
import HomePage from "./components/HomePage"








class App extends React.Component {
  constructor(){
    super()
    let state = {

    }
  }
    
    render(){

      return (
        <div className="App">
        <p><Link to = "/">Home</Link></p>
        <p><Link to = "/HomePage">Home Page</Link></p>
        <p><Link to = "/SignUp">Sign Up</Link></p>

        
        <Switch>
          <Route exact path = "/"   component = {AuthForm}/>
          <Route path = "/HomePage" component = {HomePage}/>
          <Route path = "/SignUp"   component = {SignUp}/>
        </Switch>
      </div>
    );
  }
}
      

export default App;
