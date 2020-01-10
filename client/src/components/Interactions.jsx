import React from 'react';
import axios from 'axios';
// import { throws } from 'assert';

class Interactions extends React.Component {
    constructor(props) {
        console.log(props)
        super()
        this.state = {
            username: props.username,
            caption: props.caption,
            hashtag: props.hashtag,
            imageId: props.id,
            likes: "",
            comments: "",
            likeBtnPushed: ''
        }
    }
    getLikes = async () => {
        const {imageId} = this.state;
        const res = await axios.get(`http://localhost:3001/likes/images/${imageId}`);
        // console.log('res', res.data.payload[0].count)
        let likeAmount = res.data.payload[0].count
        this.setState({
            likes: likeAmount
        })
    }
    getComments = async () => {
        const {imageId} = this.state;
        const res = await axios.get(`http://localhost:3001/comments/${imageId}`);
        console.log('res', res)
        let comment = res
        // this.setState({
        //     likes: likeAmount
        // })
    }
makeOrTakeALike = (event) => {
    // console.log(event)
    const {likeBtnPushed, likes} = this.state;
    if(likeBtnPushed !== 'add'){
        this.setState({
            likes: parseInt(likes) + 1,
            likeBtnPushed: 'add'
        })
    } else {
        this.setState({
        likeBtnPushed: 'subtract',
        likes: parseInt(likes) - 1
    
    })
}
}
    componentDidMount = () => {
        this.getLikes();
        this.getComments();
    }
    render() {
        const { username, caption, likes, comments } = this.state
        return (
            <>
                <p onClick = {this.makeOrTakeALike}>Likes: {likes}</p>
                <p>Comments:{comments}</p>
                <p><strong>{username}</strong> {caption} <em>{this.props.hashtag}</em></p>
            </>
        )
    }
}

export default Interactions;