// controllers/creditController.js
const CreditOption = require('../models/CreditOption');

exports.getCredits = async (req, res) => {
    try {
        const credits = await CreditOption.find();
        res.json(credits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
