import React from "react"
import axios from "axios"

class HomePage extends React.Component{
    constructor(props){
        super()
        this.state = {
            username: props.userName,
            email: '',
            urls: [],
            alt:[],
            caption: []
        }
    }
    getAllPictures = async () => {
        const {username} = this.state
        console.log(username)
        let response = await axios.get(`http://localhost:3001/images/users/${username}`);
        console.log(response)

    }
    render(){
        return (
            <div>
                <h1>Home Page welcome {this.props.userName}</h1>
                <button onClick = {this.getAllPictures}>Click me</button>
            </div>
        )

    }
    
}

export default HomePage