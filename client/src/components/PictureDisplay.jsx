import React from 'react';
import Picture from './Picture';

const PictureDisplay = (props) => {
    let properHashtag = []
    let filteredHashtag = ""

    return (
        props.pictures.map((picture) => {

            const same = (hashtag) => {
                if (!filteredHashtag.includes(hashtag.hashtag) && hashtag.image_id === picture.id) {
                    filteredHashtag += `#${hashtag.hashtag} `
                } else {
                    filteredHashtag = ""
                }
            }

            props.hashtags.map((hashtag) => {

                for (let i = 0; i < hashtag.length; i++) {
                    if (!properHashtag.includes(hashtag[i]) && (hashtag[i].image_id === picture.id)) {
                        properHashtag.push(hashtag[i])
                    }
                }
                properHashtag.filter(same)
            })
            return (
                <Picture url={picture.image_url}
                    id={picture.id}
                    key={picture.id}
                    alt={picture.alt}
                    caption={picture.caption}
                    hashtag={filteredHashtag}
                    username = {picture.poster_name}

                />
            )

        }
        )
    )
}

export default PictureDisplay;


