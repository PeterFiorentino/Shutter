var express = require('express');
var router = express.Router();
const db = require('./db')


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json([{name: "Jaiden"}, {username: "BxRebel"}]);
// });

router.get('/users'), async (req, res) => {
  try {
      let allUsers = await db.any("SELECT * FROM users");

      res.json({
          users: allUsers, 
          message: "Success"
      })
  }catch (error) {
      res.json ({
          messsage:"Error"
      })
  }
}

router.get('/:username'), async (req, res) => {
try {
  let singleUser = await db.one(`SELECT * FROM users WHERE username = ${req.params.username}`);
  res.json({
      status: "Success", 
      body: {
          user: singleUser
      }
  })
} catch(error) {
  res.json({
      message: "No user associated with this username"
  })
}
}

router.post('/:username', async (req, res) => {
  try {
      let insertQuery =`INSERT into users(username, email) 
      VALUES($1, $2)`

      if(!req.body.username && !req.body.email){
          res.json({
              "message": "Information Missing"
          })
      }else {
          await db.none(insertQuery, [req.body.username, req.body.email]);

          res.json({
              user: insertQuery,
              message: "posted"
          })
      }
  } catch(error) {
      console.log(error);
      res.json({
          message: error
      })
  }
})

module.exports = router;
