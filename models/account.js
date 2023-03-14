const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;