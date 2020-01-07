import React from 'react';

const Picture = (props) => {
    console.log('pic props', props)
    return (
        <>
        <img
        src = {props.url}
        alt = {props.alt}
        width = '300px'
        height = '300px'
        />
         <p>{props.caption}</p> {/*#{props.hashtag}</p> */}
        </>
    )
}
export default Picture;