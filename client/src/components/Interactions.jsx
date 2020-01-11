import React from 'react';
import axios from 'axios';
import './CSS/Interactions.css'

class Interactions extends React.Component {
    constructor(props) {
        super()
        this.state = {
            username: props.username,
            poster_name: props.poster_name,
            caption: props.caption,
            hashtag: props.hashtag,
            imageId: props.id,
            likes: "",
            comments: "",
            likeBtnPushed: ''
        }
    }
    getLikes = async () => {
        const { imageId, username } = this.state;
        this.makeOrTakeALike()
        const res = await axios.get(`http://localhost:3001/likes/images/${imageId}`);
        console.log('get likes', imageId, res.data.payload[0])
        if ((res.data.payload[0])) {
            console.log('first if')
            if (username === res.data.payload[0].liker_name) {
                console.log('second if')
                this.setState({
                    likeBtnPushed: 'add'
                })
            }
        }
    }
    countLikes = async () => {
        const { imageId } = this.state;
        this.getLikes()
        const res = await axios.get(`http://localhost:3001/likes/images/count/${imageId}`)
        let likeAmount = res.data.payload[0].count
        this.setState({
            likes: likeAmount
        })

    }
    getComments = async () => {
        const { imageId } = this.state;
        const res = await axios.get(`http://localhost:3001/comments/${imageId}`);
        let comment = res
        // this.setState({
        //     likes: likeAmount
        // })
    }
    makeOrTakeALike = async (event) => {
        const { likeBtnPushed, likes, imageId, username } = this.state;
        if (likeBtnPushed === 'subtract') {
            const res = await axios.post('http://localhost:3001/likes/images', { liker_name: username, image_id: imageId })
            this.countLikes()
            this.setState({
                likes: parseInt(likes),
                likeBtnPushed: 'add'
            })
        } else if (likeBtnPushed === 'add' || likeBtnPushed === '') {
            this.setState({
                likeBtnPushed: 'subtract',
                likes: parseInt(likes) - 1
            })
        }
    }
    componentDidMount = () => {
        this.countLikes();
        this.getComments();
        this.getLikes();
    }
    render() {
        const { poster_name, caption, likes, comments, likeBtnPushed } = this.state
        return (
            <>
                <br></br>
                {likeBtnPushed !== 'add' ? <div onClick={this.makeOrTakeALike}><i class="far fa-heart"></i> Likes: {likes}</div>
                    : <div onClick={this.makeOrTakeALike}><i id='liked' class="fas fa-heart"></i> Likes: {likes}</div>}
                <p>Comments:{comments}</p>
                <p><strong>{poster_name}</strong> {caption} <em>{this.props.hashtag}</em></p>
            </>
        )
    }
}

export default Interactions;