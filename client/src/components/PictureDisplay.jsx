import React from 'react';
import Picture from './Picture';

const PictureDisplay = (props) => { 
    return(
        props.pictures.map((picture) => {
            return (
                <Picture url = {picture.image_url}
                key = {picture.id}
                alt = {picture.alt}
                caption = {picture.caption}
                />
            )
        })
    )
}

export default PictureDisplay;