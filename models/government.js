const mongoose = require('mongoose');

const governmentSchema = mongoose.Schema({
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
    },
    name: String,
    level: String,
    govDetails: String,
    email: String,
    annualFundingBudget: Number,
    fundedProjects: Number
});

const government = mongoose.model('Government', governmentSchema);
module.exports = government;