const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

// Load env file
dotenv.config({ path: './config/config.env' });

// Connect to the database
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Load modal
const User = require('./models/User');

// Read JSON form file
const user = JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8'));

// Impored json object into database
const importData = async () => {
    try {
        await User.create(user);
        console.log('Data is importing ...'.green.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red);
    }
}

// Delete all record from database
const deleteData = async () => {
    try {
        await User.deleteMany();
        console.log('Delete all record'.red.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red);
    }
}

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}
