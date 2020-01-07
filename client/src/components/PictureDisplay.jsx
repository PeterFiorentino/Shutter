import React from 'react';
import Picture from './Picture';

const PictureDisplay = (props) => {
    return(
        props.urls.map((picture) => {
            let key = props.urls.indexOf(picture);
            return (
                <Picture url = {picture}
                key = {key}
                />
            )
        })
    )
}

export default PictureDisplay;