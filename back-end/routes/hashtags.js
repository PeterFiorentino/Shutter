const express = require('express');
const router = express.Router();
const db = require('./db.js');

/* HELPERS */
const log = console.log;




/* MIDDLEWARE */
const allHashtags = async (req, res, next) => {
    try {
        let image_id = parseInt(req.params.image_id)
        const selectQuery = `SELECT hashtag FROM hashtags WHERE image_id = $1;`;
        let response = await db.any(getQuery, image_id);
        res.json({
            status: "success",
            message: "photos retrieved",
            body: response
        });
    }
    catch (error) {
        message: `There was an error!`
    }
}
const singleHashtagAllPhotos = async (req, res, next) => {
    try {
        word = req.params.word
        const selectQuery = `SELECT image_id FROM hashtags JOIN images ON images.id = hashtags.image_id WHERE hashtag = $1;`; //double check later
        let response = await db.any(selectQuery, word);
        res.json({
            status: "success",
            message: "all photos for single hashtag",
            body: response
        });
    } catch (error) {
        message: `There was an error!`
    }
}



/* ROUTES */
router.get("/:image_id", allHashtags); // gets all hashtags
router.get("/:word", singleHashtagAllPhotos); // get all  photos for one hashtag



module.exports = router;
