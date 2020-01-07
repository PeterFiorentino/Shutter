import React from "react"
import Profile from "./Profile"
import {Route, Link, Switch} from "react-router-dom";

const HomePage = () =>{
    return (
        <div>
            <h1>Home Page</h1>
            <Link to = "/profile">Profile</Link> 
        </div>
    )
}

export default HomePage