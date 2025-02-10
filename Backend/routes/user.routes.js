
const express = require('express');
const router = express.Router();

const {body} = require("express-validator");
const userController = require('../controllers/user.controller')

const authmiddleware = require('../middleware/auth.middleware')

router.post('/register', [
    body('email').isEmail().withMessage('invalid Email'),

    body('fullname.firstname').isString().isLength({min:3}).withMessage('first name must be atleat 3 character long'),

    body('password').isLength({ min:6}).withMessage('password must be 6 character long'),

], 
 userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('invalid Email'),
    body('password').isLength({min: 6}).withMessage('password')
],
userController.loginUser
)

router.get('/profile', authmiddleware.authUser , userController.getUserProfile)

router.get('/logout',authmiddleware.authUser,
    userController.loginUser
)
module.exports =router;