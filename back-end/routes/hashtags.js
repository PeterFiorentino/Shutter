const express = require('express');
const router = express.Router();
const db = require('../db.js');

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
        const selectQuery = ``;
        let response = await db.any(getQuery, njkb);
        res.json({
            status: "success",
            message: "all photos for single hashtag",
            body: response
        });
    } catch (error) {
        message: `There was an error!`
    }

    


    /* ROUTES */
    router.get("/images/", allHashtags); // gets all hashtags
    router.get("/user/:word", singleHashtagAllPhotos); // get all user's photos
    


    module.exports = router;
