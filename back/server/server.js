require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('../routes/user')

const app = express()
app.use(express.json())

const password = '1GoZPeuoppIotaLF'
const cluster = 'my-first-cluster'
const dbname = 'dbOscar'

//routes
app.use('/api/user', userRouter)

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose
    .connect(
        `mongodb+srv://${dbname}:${password}@${cluster}.bivp5.mongodb.net/?retryWrites=true&w=majority`,
        connectionParams
    )
    .then(() => {
        // listen for requests port 3000
        app.listen(3000, () => {
            console.log('connected to db & listening on port', 3000)
        })
    })
    .catch((error) => {
        console.log(error)
    })
