const mongoose = require('mongoose');

const tagName = mongoose.Schema({
    name: String,
});

const TagName = mongoose.model('TagName', tagName);
module.exports = TagName;