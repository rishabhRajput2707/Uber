const userModel = require('../models/user.model')

// const userSevice = require('../service/user.service')
const userService = require("../service/user.service")

const { validationResult } = require('express-validator')
const BlacklistToken = require('../models/blacklistToken.model')


// module.exports.registerUser = async (req, res, next) => {
//     const errors = validationResult(req);

//     if(!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array()})
//     }

    
//     const { fullname , email , password } = req.body;
//     // console.log(fullname, email, password);

//     const isUserAlreadyExist = await userModel.findOne({email});

//     if(isUserAlreadyExist){
//         return res.status(400).json({message: 'User already exist'});
//     }

//     const hashedpassword = await userModel.hashpassword;

//     const user = await userSevice.createUser({
//         firstname : fullname.firstname,
//         lastname : fullname.lastname,
//         email,
//         password: hashedpassword
//     })

//     const token = user.generateAuthToken();
//     res.status(201).json({token , user})
// }

module.exports.registerUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserAlready = await userModel.findOne({ email });

    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exist' });
    }

    const hashedPassword = await userModel.hashpassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });


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

module.exports.logoutUser = async(req, res , next)=>{
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await BlacklistToken.create({token});

    res.status(200).json({message: 'logged out successfully'});
}