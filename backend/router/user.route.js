const express = require('express')
const Router = express.Router()
const {  getUser, getSingleUser, updateUser, deleteUser, getUserStat } = require('../controller/user.controller')
const verify = require('../middleware/verify')


Router.get('/user',verify, getUser)
Router.get('/user_stat',verify, getUserStat)
Router.get('/user/:id', verify, getSingleUser)
Router.put('/user/:id', verify, updateUser)
Router.delete('/user/:id',verify,  deleteUser)

module.exports = Router