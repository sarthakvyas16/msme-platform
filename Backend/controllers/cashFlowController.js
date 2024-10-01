// controllers/cashFlowController.js
const CashFlow = require('../models/CashFlow');

exports.addCashFlow = async (req, res) => {
    try {
        const { userId, cashIn, cashOut } = req.body;
        const newCashFlow = new CashFlow({ userId, cashIn, cashOut });
        await newCashFlow.save();
        res.status(201).json({ message: "Cash flow recorded successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCashFlow = async (req, res) => {
    try {
        const cashFlow = await CashFlow.find({ userId: req.params.userId });
        res.json(cashFlow);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
