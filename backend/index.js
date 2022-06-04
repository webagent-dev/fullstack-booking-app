require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const host =`new server started at localhost:${port}`
const connectToDb = require('./services/connect')
const authRouter = require('./router/auth.route')
const userRouter = require('./router/user.route')
// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ express: true }))
// router
app.use('/api/v1/', authRouter)
app.use('/api/v1/get/', userRouter)
// start
const start = async () => {
    try {
        await connectToDb(process.env.MONGO_URL)
        app.listen(port, () => console.log(host))
    } catch (err) {
        console.log(err)
    }
}
// start script
start()