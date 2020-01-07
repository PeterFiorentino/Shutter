import React from "react"
import axios from "axios"
import PictureDisplay from "./PictureDisplay";
import './CSS/HomePage.css';


class HomePage extends React.Component {
    constructor(props) {
        super()
        this.state = {
            username: props.userName,
            pictures: [],
            hashtags: []
        }
    }
    getAllPictures = async () => {
        const { username } = this.state
        console.log(username)
        let pictures = await axios.get(`http://localhost:3001/images/`);
        console.log(pictures.data.body)
        this.setState({
            pictures: pictures.data.body
        })
    }
    hashtag = async (image_id) => {
        let newArr = []
        let hashtags = await axios.get(`http://localhost:3001/hashtags/image/${image_id}`);
        newArr = [hashtags.data.body]
        newArr.map((hashtag) => {
            // console.log(hashtag)
            newArr = [...newArr, hashtag]
        })
        this.setState({
            hashtags: newArr
        })
        
    }
    render() {
        return (
            <div>
                <h1>Welcome {this.props.userName}</h1>
                <button onClick={this.getAllPictures}
                >get picture</button>
                <PictureDisplay pictures={this.state.pictures} 
                // getHashtags = {this.hashtag}
                />
            </div>
        )

    }

}

export default HomePage