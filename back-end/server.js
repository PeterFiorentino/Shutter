const express = require('express');
const app = express();
const port = 7878;


const imageRouter = require('./Routes/images');
const userRouter = require('./Routes/user');
const hashtagRouter = require('./Routes/hashtags');
const likesRouter = require('./Routes/likes');
const cors = require('cors')

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({
    extended: false
}))

app.use('/images', imageRouter)
app.use('/user', userRouter)
app.use('/hashtags', hashtagRouter)
app.use('/likes', likesRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


