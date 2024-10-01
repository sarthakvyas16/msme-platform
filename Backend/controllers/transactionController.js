// controllers/transactionController.js
const Transaction = require('../models/Transaction');

exports.addTransaction = async (req, res) => {
    try {
        const { userId, type, amount, description } = req.body;
        const newTransaction = new Transaction({ userId, type, amount, description });
        await newTransaction.save();
        res.status(201).json({ message: "Transaction added successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.params.userId });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
