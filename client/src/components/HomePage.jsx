import React from "react"
import Profile from "./Profile"
import {Route, Link, Switch} from "react-router-dom";

class  HomePage extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return (
            <div>
                <h1>Home Page welcome {this.props.userName}</h1>
                <Link to="/profile">Profile</Link>
            </div>
        )

    }
    
}

export default HomePage