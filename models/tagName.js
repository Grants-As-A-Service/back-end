const mongoose = require('mongoose');

const tagName = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const TagName = mongoose.model('Tagname', tagName);
module.exports = TagName;