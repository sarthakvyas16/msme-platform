// models/CreditOption.js
const mongoose = require('mongoose');

const creditOptionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    interestRate: { type: String, required: true },
    amount: { type: String, required: true },
});

module.exports = mongoose.model('CreditOption', creditOptionSchema);
