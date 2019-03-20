const express = require('express')
const UsersService = require('./users-service')
const { requireAuth } = require("../middleware/jwt-auth");
const jsonBodyParser = express.json()

const usersRouter = express.Router()

usersRouter.route('/').get((req, res, next) =>{
    res.send('hello')
})