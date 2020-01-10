import React from 'react';
import Picture from './Picture';

const PictureDisplay = (props) => {
    let properHashtag = [];
    let filteredHashtag = "";

    return (
        props.pictures.map((picture) => {
            props.hashtags.map((hashtag) => {
                for (let i = 0; i < hashtag.length; i++) {
                    if (!properHashtag.includes(hashtag[i]) && (hashtag[i].image_id === picture.id)) {
                        properHashtag.push(hashtag[i]);
                    }
                }
            })

            filteredHashtag = '';
            for (let i = 0; i < properHashtag.length; i++) {
                if (properHashtag[i].image_id === picture.id) {
                    filteredHashtag += `#${properHashtag[i].hashtag} `;
                }
            }

            return (
                <Picture url={picture.image_url}
                    id={picture.id}
                    key={picture.id}
                    alt={picture.alt}
                    caption={picture.caption}
                    hashtag={filteredHashtag}
                    username={picture.poster_name}

                />
            )
        }
        )
    )
}

export default PictureDisplay;