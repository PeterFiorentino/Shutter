/* MODULE INITS */
const express = require('express');
    const router = express.Router();
// Database 
const db = require('./db.js');

const allLikesSinglePicture = async (req, res) => {
  try {
    let imageId = parseInt(req.params.image_id)
    let getQuery =`
    SELECT COUNT(DISTINCT (liker_id)) FROM likes WHERE image_id = $1;`

    let allLikes = await db.any(getQuery, imageId)
    res.json({
        payload: allLikes,
        message: `got all likes`
    })
} catch (error) {
    res.json({
        message: `There was an error!`
    })
}
}

const postLikes = async (req, res) => {
  try {
    let imageId = parseInt(req.params.image_id)
    let likerId = parseInt(req.params.liker_id)
    let insertQuery = `
    INSERT INTO likes (liker_id, image_id)
    VALUES($1, $2)
    `
    let addLike = await db.none(insertQuery, [likerId, imageId])
    res.json({
      payload: req.params,
      message: "Like added!"
    })
  } catch (error) {
    res.json({
      message: `There was an error!`
    })
  }


router.get("/images/:image_id", allLikesSinglePicture)  //- Get all likes for a single image
router.post("/images/:image_id/:liker_id", postLikes) //- Post single like