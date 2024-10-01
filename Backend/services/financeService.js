// services/financeService.js
const axios = require('axios');

exports.fetchLenderOptions = async () => {
    try {
        const response = await axios.get('https://api.lendingclub.com/v1/loans');
        return response.data;
    } catch (error) {
        throw new Error("Error fetching lender options");
    }
};
