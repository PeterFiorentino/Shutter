const express = require('express');
const router = express.Router();
const db = require('./db.js');

/* HELPERS */
const log = console.log;




/* MIDDLEWARE */
const allHashtags = async (req, res, next) => {
    try {
        const selectQuery = ``;
        let response = await db.any(getQuery, njkb);
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
        const selectQuery = ``;
        let response = await db.any(getQuery, word);
        res.json({
            status: "success",
            message: "all photos for single hashtag",
            body: response
        });
    } catch (error) {
        message: `There was an error!`
    }

    


    /* ROUTES */
    router.get("/:image_id", allHashtags); // gets all hashtags
    router.get("/:word", singleHashtagAllPhotos); // get all  photos for one hashtag
    


    module.exports = router;
