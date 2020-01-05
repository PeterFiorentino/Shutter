import React from 'react';
import {Link,Route,Switch} from 'react-router-dom'
import './App.css';
import Home from "./components/Home"
import SignUp from "./components/Signup"
import HomePage from "./components/HomePage"








function App() {
  return (
    <div className="App">
      <p><Link to = "/">Home</Link></p>
      <p><Link to = "/SignUp">Sign Up</Link></p>
      <Link to = "/Home"></Link> 
      
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/SignUp" component = {SignUp}/>
        <Route path = "/Home"   component = {HomePage}/>
      </Switch>
    </div>
  );
}
      

export default App;
