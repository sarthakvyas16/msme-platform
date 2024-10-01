// models/CashFlow.js
const mongoose = require('mongoose');

const cashFlowSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cashIn: { type: Number, required: true },
    cashOut: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CashFlow', cashFlowSchema);
