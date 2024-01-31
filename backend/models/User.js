const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide email address'],
        unique: true,
        match:[/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Please provide a valid emial']
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'The password must be more than 6 character'],
        select: false
    },
    resetPasswordToken: String,
    restePasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Encript password

// .pre('save') - function should be executed before 'saving' a document of the 'UserSchema' model in Mongoose
UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Sign JWT and return
UserSchema.methods.getJWTWebToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_TOKEN_SECRET_KEY,{
        expiresIn: process.env.JWT_TOKEN_EXPIRE
    });
}

// Match enter password and hash
UserSchema.methods.matchPassword = async function(enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
}

module.exports = mongoose.model('User', UserSchema);