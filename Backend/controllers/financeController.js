// controllers/financeController.js
const IncomeExpense = require('../models/IncomeExpense');

exports.trackIncomeExpense = async (req, res) => {
    try {
        const { userId, type, amount, description } = req.body;
        const newIncomeExpense = new IncomeExpense({ userId, type, amount, description });
        await newIncomeExpense.save();
        res.status(201).json({ message: "Income/Expense tracked successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
