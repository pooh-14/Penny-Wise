// req (request), res (response), and next (a callback function to pass control to the next middleware in the stack).
const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req,res,next)).catch(next);
}

// catches any errors that might occur during the execution of fn 
// and passes them to the Express error handling middleware by calling next(err).

module.exports = asyncHandler;

// errors thrown inside the asynchronous function are properly caught and passed to the Express error handling mechanism.