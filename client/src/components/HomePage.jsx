import React from "react"
import axios from "axios"
import PictureDisplay from "./PictureDisplay";

class HomePage extends React.Component {
    constructor(props) {
        super()
        this.state = {
<<<<<<< HEAD
=======
            username: props.userName,
            pictures: [],
            hashtags: []
>>>>>>> b19c5179046be9640251e35672143bae219862f7
        }
    }
    getAllUserPictures = async () => {
        const { username } = this.state
        console.log(username)
        let pictures = await axios.get(`http://localhost:3001/images/users/${username}`);
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
                <button onClick={this.getAllUserPictures}
                >get picture</button>
                <PictureDisplay pictures={this.state.pictures} 
                // getHashtags = {this.hashtag}
                />
            </div>
        )

    }

}

export default HomePage