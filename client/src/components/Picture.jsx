import React from 'react';


const Picture = (props) => {
    console.log(props)
    return (
        <img 
        src = {props.url}
        alt = {props.alt}
        width = '300px'
        height = '300px'
        />
   
    )
}
export default Picture;