import React from "react"
import Profile from "./Profile"
import {Route, Link, Switch} from "react-router-dom";
import axios from "axios"
import PictureDisplay from "./PictureDisplay";
import './CSS/HomePage.css';


class HomePage extends React.Component {
    constructor(props) {
        super()
        this.state = {
            username: props.userName,
            pictures: [],
            hashtags: [],
            imageFile: null,
            uploadedCaption: '',
            uploadedHashtag: [],
            message: '',
            checkbox: false,
            alt: '',
            search: ''
        }
    }
    getAllPictures = async () => {
        const { pictures } = this.state
        let arr = [];
        let newArr = [];
        let response = await axios.get(`http://localhost:3001/images/`);
        console.log('data', response.data.body)
        console.log('pictures', pictures)
        arr = response.data.body
        arr.map((picture) => {
            newArr = [...newArr, picture]

        })
        console.log(newArr)
        this.setState({
            pictures: newArr
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
    handleFileInput = (event) => {
        const { pictures, imageFile } = this.state
        console.log('file changed')
        console.log(event.target)
        this.setState({
            imageFile: event.target.files[0]
        })
        console.log(imageFile)
    }
    imgToDatabase = async () => {
        console.log("hi")
        const { username, imageURL, uploadedCaption, checkbox, alt } = this.state;
        console.log(username, imageURL, uploadedCaption, checkbox)
        let altText = ''
        if (!checkbox) {
            altText = `${username} uploaded a photo`
            console.log('false', altText)
        } else {
             altText = alt
            console.log('true', altText)
        }
        try {
            console.log("hi try")
            const res = await axios.post('http://localhost:3001/images/upload', { poster_name: username, image_url: imageURL, caption: uploadedCaption, alt: altText })
            console.log(res.data.body)
        } catch (err) {
            console.log(err)
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData();
        console.log(data)
        data.append("image", this.state.imageFile)
        console.log(data)
        try {
            const res = await axios.post('http://localhost:3001/upload', data)
            console.log(res.data)
            this.setState({
                imageURL: res.data.imageUrl,
                message: "Image uploaded!"
            })

            this.imgToDatabase();
        } catch (err) {
            console.error(err)
        }
    }
    handleCaptionChange = (event) => {
        console.log("caption changed", event.target.value)
        this.setState({
            uploadedCaption: event.target.value
        })
    }
    handleHashtagChange = (event) => {
        console.log("caption changed", event.target.value)
        this.setState({
            uploadedHashtag: event.target.value
        })
    }
    selectAlt = (event) => {
        const {checkbox} = this.state
        this.setState({
            checkbox: !checkbox
        })
    }
    componentDidUpdate(){
        console.log('updated')
    }
    handleAltChange = (event) => {
        console.log('alt text changed', event.target.value)
        this.setState({
            alt: event.target.value
        })
    }
    handleSearchChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    render() {
        const {checkbox} = this.state
        console.log(this.props)
        return (
            <div>
                <h1>Welcome {this.props.userName}</h1>
                <h3>{this.props.email}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type='file' onChange={this.handleFileInput} required />
                    {/* <br></br> */}
                    <label htmlFor='caption'>Caption <input name='caption' type='text' placeholder='Enter a caption' onChange={this.handleCaptionChange} /> </label>
                    {/* <br></br> */}
                    <label htmlFor='hashtag'>Hashtag <input name='hashtag' type='text' placeholder='Add hashtags' onChange={this.handleHashtagChange} /> </label>
                    <label htmlFor='alt'> Add alternate text<input name='alt' type='checkbox' value='checked' onChange={this.selectAlt} /></label>
                    {checkbox ?
                    <input name='altText' type='text' placeholder='Add Alt text' onChange={this.handleAltChange} required/> : 
                    null}
                    {/* <br></br> */}
                    <input type='submit' value='Upload' />
                </form>
                <button onClick={this.getAllPictures}>get picture</button>
                <PictureDisplay pictures={this.state.pictures}
                // getHashtags = {this.hashtag}
                />
                <Link to = "/profile">Profile</Link>
            </div>
        )

    }

}

export default HomePage