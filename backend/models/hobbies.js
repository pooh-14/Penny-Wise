const mongoose = require('mongoose');

const HobbiesSchema = new mongoose.Schema({
    hobbies: {
        type: String,
        required: [true, 'Please provide a hobby'],
    },
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transction'
    }
   
});


module.exports = mongoose.model('Hobbies', HobbiesSchema);