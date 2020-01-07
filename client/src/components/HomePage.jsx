import React from "react"
import axios from "axios"
import PictureDisplay from "./PictureDisplay";

class HomePage extends React.Component {
    constructor(props) {
        super()
        this.state = {
            username: props.userName,
            pictures: []
        }
    }
    getAllPictures = async () => {
        const { username } = this.state
        console.log(username)
        let response = await axios.get(`http://localhost:3001/images/users/${username}`);
        console.log(response.data.body)
        this.setState({
            pictures: response.data.body
        })

    }
    render() {
        return (
            <div>
                <h1>Home Page welcome {this.props.userName}</h1>
                <button onClick={this.getAllPictures}>Click me</button>
                <PictureDisplay pictures = {this.state.pictures}/>
            </div>
        )

    }

}

export default HomePage