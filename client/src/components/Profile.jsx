import React from "react"
import {Route, Link, Switch} from "react-router-dom";


class  Profile extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return (
            <div>
                <h1>{this.props.userName}'s Profile</h1>
            </div>
        )

    }
    
}

export default Profile