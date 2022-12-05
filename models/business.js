const mongoose = require('mongoose');

const businessSchema = mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    city: String,
    province: String,
    postalCode: String,
    industry: String,
    projects: [String]
});

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;