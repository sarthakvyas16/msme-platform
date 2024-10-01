// backend/controllers/feedbackController.js
const Feedback = require('../models/Feedback');

// Create feedback
exports.createFeedback = async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json(feedback);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all feedback
exports.getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find().populate('userId', 'name email');
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
