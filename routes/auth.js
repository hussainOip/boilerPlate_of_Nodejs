const express = require('express')
const Router = express.Router()
const auth = require('../controller/auth')
const router = ()=>{
    Router.post('/login', auth.login)    
    Router.post('/register', auth.register)
    return Router;
}
module.exports =  router()