//  ODM (Object Data Modeling) library for MongoDB and Node.js.
//  It simplifies interactions with a MongoDB database by providing a higher-level, schema-based abstraction.
const mongoose = require('mongoose');


// asynchronous operations to first connect to db and then execute other functions
const connectDB = async () => {
    console.log('connectDB goint to happen');
    
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        //parsing- the process of converting a JSON object in text format to a Javascript object that can be used inside a program.
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log(`mongodb connected ${conn.connection.host}`.green.underline);
}

module.exports = connectDB;