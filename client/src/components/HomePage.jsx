import React from "react"

class  HomePage extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return (
            <div>
                <h1>Home Page welcome {this.props.userName}</h1>
            </div>
        )

    }
    
}

export default HomePage