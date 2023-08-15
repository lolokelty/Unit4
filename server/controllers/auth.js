module.exports = {
    login: async (req, res) => {
        console.log('login')
        res.sendStatus(200)
    },
    register: async (req, res) => {
        console.log('register')
        res.sendStatus(200)
    },
}

require('dotenv').config()
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken')

const createToken = (username, id) => {
    return jwt.sign(
        {
            username,
            id
        },
        SECRET,
        {
            expiresIn: '2 days'
        }
    )
}

login: async (req, res) => {
    let {username, password} = req.body
    const token = createToken(username, password)
    res.status(200).send(token)
}