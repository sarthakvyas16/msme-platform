// backend/models/Loan.js
const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['approved', 'repaid', 'defaulted'], required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Loan', loanSchema);
