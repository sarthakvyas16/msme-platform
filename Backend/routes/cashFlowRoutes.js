// routes/cashFlowRoutes.js
const express = require('express');
const { addCashFlow, getCashFlow } = require('../controllers/cashFlowController');
const router = express.Router();

router.post('/', addCashFlow);
router.get('/:userId', getCashFlow);

module.exports = router;
