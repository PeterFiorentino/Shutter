import React from 'react';
import Picture from './Picture';
// import axios from 'axios';

// hashtag()


const PictureDisplay = (props) => {
    console.log(props, props.hashtags)
    let properHashtag = []
    let filteredHashtag = ""
 
    return (
        props.pictures.map((picture) => {
          const same = (hashtag) => {
              filteredHashtag = ""
              if(hashtag.image_id === picture.id){
                  
                  console.log('yes', hashtag)
                  filteredHashtag += `#${hashtag.hashtag} `
                  console.log(filteredHashtag)
              }
            //   filteredHashtag = ''
            //   return console.log(picture.id === image_id)
          } 
        //   props.hashtags.hashtag.filter(same)
           props.hashtags.map((hashtag)=> {
            //    
//  //    console.log(hashtag)
               for(let i = 0; i<hashtag.length; i++){
                   if(!properHashtag.includes(hashtag[i]) && (hashtag[i].image_id === picture.id)){
                   properHashtag.push(hashtag[i])
                console.log(properHashtag)
                }
            } properHashtag.filter(same)
           })
            console.log(picture)
            return (
                <Picture url={picture.image_url}
                    id={picture.id}
                    key={picture.id}
                    alt={picture.alt}
                    caption={picture.caption}
                    hashtag={filteredHashtag}

                />
            )
        }
        )
    )
}

export default PictureDisplay;


