const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    date: {
        type: Date,
        default:Date.now,
        required: [true, 'Please enter the date'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
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