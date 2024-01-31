const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');


exports.protecter = asyncHandler(async(req, res, next) => {
    let token;

    // console.log(req);
    
    // get token from headers
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    console.log(token,"protector - token");

    //  else if(cookies) {
    //     token = cookies.token;
    //  }

    // console.log(token);

    if(!token) {
        return next(new ErrorResponse('You dont have access to this request', 401));
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY);
        console.log(decode);
        
        req.user = await User.findById(decode.id);
        console.log(req.user);
        next();
    } catch (err) {
        return next(new ErrorResponse('You dont have aceess to this request', 401));
    }
});

exports.authenticate = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return next(new ErrorResponse(`You dont have access to this route with user role ${req.user.role}`, 403));
        }
        next();
    }
};