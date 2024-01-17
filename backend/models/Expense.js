const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    date: {
        type: String,
        required: [true, 'Please enter the date'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
        // unique: true,
        // match:[/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Please provide a valid emial']
    },
    category: {
        type: String,
        enum: ['food', 'shopping', 'rent', 'groceries'],
        default: 'food'
    },
    amount: {
        type: Number,
        required: [true, 'Please provide amount'],
    },
    payment: {
        type: String,
        required: [true, 'Please provide Payment mode'],
    },
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Expense', ExpenseSchema);