const mongoose = require('mongoose');

const businessSchema = mongoose.Schema({
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
    },
    name: String,
    phone: String,
    address: String,
    city: String,
    province: String,
    postalCode: String,
    industry: String,
    fte: Number,
    pte: Number,
    annualRevenue: Number,
    yearOfInception: Number,
    projects: [String]
});

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;