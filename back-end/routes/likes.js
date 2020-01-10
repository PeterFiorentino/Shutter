/* MODULE INITS */
const express = require('express');
    const router = express.Router();
// Database 
const db = require('./db.js');

const allLikesSinglePicture = async (req, res) => {
  try {
    let imageId = parseInt(req.params.image_id)
    let getQuery =`
    SELECT COUNT(DISTINCT (liker_name)) FROM likes WHERE image_id = $1;`

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
    let likerName = req.params.liker_name
    let insertQuery = `
    INSERT INTO likes (liker_name, image_id)
    VALUES($1, $2)
    `
    let addLike = await db.none(insertQuery, [likerName, imageId])
    res.json({
      payload: req.params,
      message: "Like added!"
    })
  } catch (error) {
    res.json({
      message: `There was an error!`
    })
  }
}


router.get("/images/:image_id", allLikesSinglePicture)  //- Get all likes for a single image
router.post("/images/:image_id/:liker_name", postLikes) //- Post single like

module.exports = router;
