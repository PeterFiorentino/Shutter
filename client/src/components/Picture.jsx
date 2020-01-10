import React from 'react';

const Picture = (props) => {
    return (
        <div className = 'picture'>
        <h4>{props.username}</h4>
        <img 
        src = {props.url}
        alt = {props.alt}
        width = '300px'
        height = '300px'
        />
         <p>{props.caption} {props.hashtag}</p>
        </div>
    )
}
export default Picture;