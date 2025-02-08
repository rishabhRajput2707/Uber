const userModel = require('../models/user.model')

const userSevice = require('../service/user.service')

const { validationResult } = require('express-validator')


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }

    console.log(req.body);
    
    const { fullname , email , password } = req.body;

    const hashedpassword = await userModel.hashpassword;

    const user = await userSevice.createUser({
        firstname : fullname.firstname,
        lastname : fullname.lastname,
        email,
        password: hashedpassword
    })

    const token = user.generateAuthToken();
    res.status(201).json({token , user})
}

module.exports.loginUser = async(req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email , password} = req.body;

    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({message: 'Invalid email or password'})
    }

    const isMatch =await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message:'Invalid email or password'})
    }

    const token = user.generateAuthToken();
    res.status(200).json({token,user});
}

module.exports.getUserProfile = async(req, res , next)=>{
    res.status(200).json(req.user);
}