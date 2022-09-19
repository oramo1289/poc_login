const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const valitador = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

userSchema.statics.signup = async function (name, email, password) {
    if (!name || !email || !password) {
        throw Error('all inputs must be filled')
    }

    if (!valitador.isEmail(email)) {
        throw Error('must be a correct email')
    }

    if (!valitador.isStrongPassword(password)) {
        throw Error('password not strong')
    }

    const exist = await this.findOne({ email })

    if (exist) {
        throw Error('email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ name, email, password: hash })

    return user
}

userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('all inputs must be filled')
    }
    const user = await this.findOne({ email })

    if (!user) {
        throw Error("you don't exist in the database")
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('not so fats cowboy, not valid credentials')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)
