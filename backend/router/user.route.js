const express = require('express')
const Router = express.Router()
const {  getUser, getSingleUser, updateUser, deleteUser } = require('../controller/user.controller')


Router.get('/user', getUser)
Router.get('/user/:id', getSingleUser)
Router.put('/user/:id', updateUser)
Router.delete('/user/:id', deleteUser)

module.exports = Router