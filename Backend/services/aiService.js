// services/aiService.js
exports.assessCreditworthiness = (cashFlows) => {
    let totalIncome = 0;
    let totalExpenses = 0;

    cashFlows.forEach(flow => {
        totalIncome += flow.cashIn;
        totalExpenses += flow.cashOut;
    });

    const creditworthiness = (totalIncome - totalExpenses) > 0 ? "Good" : "Needs Improvement";
    return creditworthiness;
};
