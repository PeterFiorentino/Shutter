const express = require('express');
const router = express.Router();
const db = require('../db.js');

/* HELPERS */
const log = console.log;




/* MIDDLEWARE */
const allPhotos = async (req, res, next) => {
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
const allUserPhotos = async (req, res, next) => {
    try {
        const selectQuery = ``;
        let response = await db.any(getQuery, njkb);
        res.json({
            status: "success",
            message: "single user photos retrieved",
            body: response
        });
    } catch (error) {
        message: `There was an error!`
    }

    const postPhoto = async = (req, res, next) => {
        try {
            let insertQuery = ``
            await db.none(insertQuery, [fhrjesbghregh])
            res.json({
                status: "success",
                message: "single user photos retrieved",
                body: response
            });
        }
        catch (error) {
            message: `There was an error!`
        }
    }



    /* ROUTES */
    router.get("/images", allPhotos); // gets all photos
    router.post("/user/images", allUserPhotos); // get all user's photos
    router.post("images/upload", postPhoto); // adds a single photo to a user


    module.exports = router;
