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
        image = req.params.image_id
        const selectQuery = `SELECT * FROM images WHERE id = $1;`;
        let response = await db.any(selectQuery, image);
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
        let user = req.params.user
        const selectQuery = `SELECT * FROM images WHERE users_id = $1;`;

        let response = await db.any(getQuery, user);
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
        let userID = req.params.user;
        let poster = req.params.poster_name;
        let url = req.params.image_url;
        let caption = req.params.caption;
        let insertQuery = `INSERT INTO images(users_id, poster_name, image_url, caption) VALUES ($1, $2, $3, $4)`
        await db.none(insertQuery, [userID, poster, url, caption])
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
router.get("/", allPhotos); // gets all photos
router.get("/:image", singlePhoto); //get single photo
router.get("/:user", allUserPhotos); // get all user's photos
router.post("/upload", postPhoto); // adds a single photo to a user


module.exports = router;
