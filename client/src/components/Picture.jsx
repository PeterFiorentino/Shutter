import React from 'react';
import Interactions from './Interactions';


const Picture = (props) => {
    return (
        <>
        <img 
        src = {props.url}
        alt = {props.alt}
        width = '300px'
        height = '300px'
        />
         <Interactions username = {props.username} poster_name={props.poster_name} caption={props.caption} hashtag={props.hashtag} id={props.id}/>
   </>
    )
}
export default Picture;