//framework
const express = require('express');
// Dotenv is a zero-dependency module that loads environment variables( a value that can be set outside of a program.) from a .env file into process.env.
//  The dotenv package is a great way to keep passwords, API keys, and other sensitive data out of your code.
//   It allows you to create environment variables in a . env file instead of putting them in your code.
const dotenv = require('dotenv');
// const logger = require('./middleware/logger');

// Morgan is another HTTP request logger middleware for Node. js.
// It can be used to log requests, errors, and more to the console.
// The preset tiny provides the minimal output when logging HTTP requests.
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const path = require('path');
const cookieParser = require('cookie-parser');

// Load env file
dotenv.config({path: './config/.env'});

// Create database connection
connectDB();

// Load routes
const auth = require('./routes/auth');

// to set up express application
const app = express();

// Add public as a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Adding json-parser
// middleware to parse data from the client-request
app.use(express.json());

// Custome middleware Logger
// app.use(logger);

// add morgan middleware
app.use(morgan('tiny'));

// add cookie parser
app.use(cookieParser());

// add route
app.use('/api/v1/auth', auth);

// Add error middlewear
app.use(errorHandler);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log('Server is started'.blue);
});

// Handle unhandle rejection
process.on('unhandledRejection', (error, promise) => {
    console.log(`Error: ${error.message}`);
    // Close server with error code
    server.close(() => {
        process.exit(1);
    });
});