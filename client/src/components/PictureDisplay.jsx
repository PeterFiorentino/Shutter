import React from 'react';
import Picture from './Picture';
// import axios from 'axios';

// hashtag()

const PictureDisplay = (props) => {
    // console.log(props)
    // console.log('prop', props.getHashtags)
    return (
        props.pictures.map((picture) => {
        //    props.getHashtags(picture.id)
            return (
                <Picture url={picture.image_url}
                    key={picture.id}
                    alt={picture.alt}
                    caption={picture.caption}
                    // hashtags = {props.getHashtags(picture.id)}

                />
            )
        }
        )
    )
}

export default PictureDisplay;


