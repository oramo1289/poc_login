const express = require('express')
const userModel = require('../models/userModel')
const app = express()

//controllers
const { signupUser, loginUser } = require('../controllers/userController')

app.post('/signup', signupUser)

app.post('/login', loginUser)

app.get('/users', async (request, response) => {
    const users = await userModel.find({})

    try {
        response.send(users)
    } catch (error) {
        response.status(500).send(error)
    }
})

module.exports = app
