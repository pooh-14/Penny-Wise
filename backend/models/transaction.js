const mongoose = require('mongoose');

const TransctionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    balance: {
        type: Number,
        required: [true, 'Please provide a balance'],
    },
   
});


module.exports = mongoose.model('Transction', TransctionSchema);