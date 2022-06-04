const express = require('express')
const Router = express.Router()
const { register, login } = require('../controller/auth.controller')


Router.post('/register_user', register)
Router.post('/login_user', login)



module.exports = Router