import React from 'react';

const Picture = (props) => {
    return (
        <>
        <img
        src = {props.url}
        alt = {props.alt}
        width = '300px'
        height = '300px'
        />
         <p>{props.caption} {props.hashtag}</p>
        </>
    )
}
export default Picture;