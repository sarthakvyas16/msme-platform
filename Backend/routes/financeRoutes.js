// routes/financeRoutes.js
const express = require('express');
const { trackIncomeExpense } = require('../controllers/financeController');
const router = express.Router();

router.post('/track', trackIncomeExpense);

module.exports = router;
