const express = require('express');
const router = express.Router();
const db = require('./db.js');

/* HELPERS */
const log = console.log;




/* MIDDLEWARE */
const allPhotos = async (req, res, next) => {
    try {
        const selectQuery = `SELECT * FROM images;`;
        let response = await db.any(selectQuery);
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
const singlePhoto = async (req, res, next) => {
    try {
        image = req.params.image
        const selectQuery = `SELECT * FROM images WHERE id = $1;`;
        let response = await db.one(selectQuery, image);
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
        let user = req.params.users_id
        const selectQuery = `SELECT * FROM images WHERE users_id = $1;`;

        let response = await db.any(selectQuery, user);
        res.json({
            status: "success",
            message: "single user photos retrieved",
            body: response
        });
    } catch (error) {
        message: `There was an error!`
    }
}

const postPhoto = async (req, res, next) => {
    try {
        let poster = req.body.poster_name;
        let url = req.body.image_url;
        let caption = req.body.caption;
        let alt = req.body.alt;
        let insertQuery = `INSERT INTO images(poster_name, image_url, caption) VALUES ($1, $2, $3, $4)`
        await db.none(insertQuery, [poster, url, caption, alt])
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

router.get("/:image", singlePhoto); //get single photo
router.get("/users/:users_id", allUserPhotos); // get all user's photos
router.post("/upload", postPhoto); // adds a single photo to a user
router.get("/", allPhotos);

module.exports = router;
