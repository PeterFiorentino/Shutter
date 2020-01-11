import React from 'react';
import Picture from './Picture';
import Interactions from './Interactions'

const PictureDisplay = (props) => {
    console.log(props)
    let properHashtag = [];
    let filteredHashtag = "";

    return (
        props.pictures.map((picture) => {
         filteredHashtag = '';
            props.hashtags.map((hashtag) => {
                for (let i = 0; i < hashtag.length; i++) {
                    if (!properHashtag.includes(hashtag[i]) && (hashtag[i].image_id === picture.id)) {
                        properHashtag.push(hashtag[i]);
                    }
                }
            })
            for (let i = 0; i < properHashtag.length; i++) {
                if (properHashtag[i].image_id === picture.id) {
                    filteredHashtag += `#${properHashtag[i].hashtag} `;
                }
                
            }

            return (
                <div id = 'picture'>
                <Picture url={picture.image_url}
                    id={picture.id}
                    key={picture.id}
                    alt={picture.alt}

                />
                <Interactions username = {props.username} poster_name={picture.poster_name} caption={picture.caption} hashtag={filteredHashtag} id={picture.id}/>
            </div>
            )
        }
        )
    )
}

export default PictureDisplay;