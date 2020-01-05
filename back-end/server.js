const express = require('express');
const app = express();
const port = 7878;


const imageRouter = require('./routes/images');
const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtags');
const likesRouter = require('./routes/likes');
const commentRouter = require('./routes/comments')
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
app.use('/comments', commentRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


