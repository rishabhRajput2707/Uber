const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength:[3,'firstname must be atleast 3 character long']
        },
        lastname: {
            type: String,
            minlength:[3,'lastname must be atleast 3 character long']
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,'Invalid email']
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    socketId:{
        type: String,

    },
    status: {
        type: String,
        enum: ['active','inactive'],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength:[3,'color must be atleast 3 character long']
    },
    capacity:{
        type: Number,
        required: true,
        min:[1,"capacity must be atleast 1"]
    },
    vehicleType:{
        type: String,
        enum:['car','auto','bike'],
        required: true
    }

    },
    location:{
         lat:{
            type: Number,

         },
         lng: {
            type:Number,
         }
    }

});

captainSchema.methods.generateAuthToken  = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET , {expiresIn: '24h'});
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;