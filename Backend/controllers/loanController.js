exports.getLoanMetrics = async (req, res) => {
    const totalLoans = await Loan.countDocuments();
    const repaidLoans = await Loan.countDocuments({ status: 'repaid' });
    
    res.status(200).json({ totalLoans, repaidLoans });
};
