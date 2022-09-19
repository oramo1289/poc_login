const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({ name: user.name, email, token })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

// signup a user
const signupUser = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const user = await User.signup(name, email, password)
        const token = createToken(user._id)
        res.status(200).json({ name, email, token })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = { signupUser, loginUser }
