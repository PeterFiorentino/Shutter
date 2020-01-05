/* MODULE INITS */
const express = require('express');
    const router = express.Router();
// Database 
const db = require('./db.js');

const allLikes = async (req, res) => {
  try {
    let imageId = parseInt(req.params.image_id)
    let getQuery =`
    SELECT DISTINCT (liker_id), image_id
    FROM likes JOIN users ON users.user_id = likes.liker_id WHERE image_id IN (
        SELECT images.post_id FROM users 
            INNER JOIN user_holds ON users.user_id = user_holds.holds_user_id 
            INNER JOIN holds ON user_holds.holds_hold_id = holds.hold_id 
            INNER JOIN posts ON posts.poster_id = users.user_id
            WHERE holds.hold_id = $1 AND post_id = $2);`

    let allLikes = await db.any(getQuery, [req.params.hold_id, imageId])
    res.json({
        payload: allLikes,
        message: "Yo ho, me hearties! Here be all the likes on all the posts! I'm a pirate server!"
    })
} catch (error) {
    res.json({
        message: "Oops! All Errors!"
    })
}
}

const postLikes = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)
    let likerId = parseInt(req.params.liker_id)
    let insertQuery = `
    INSERT INTO likes (liker_id, post_id)
    VALUES($1, $2)
    `
    let addLike = await db.none(insertQuery, [likerId, postId])
    res.json({
      payload: req.params,
      message: "Yarrrrrr! Like added!"
    })
  } catch (error) {
    res.json({
      message: 
    })
  }
}

router.get("/images/:image_id", allLikes)  //- Get all likes for a single image
router.post("/images/:image_id/:liker_id", postLikes) //- Post single like