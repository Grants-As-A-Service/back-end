const mongoose = require('mongoose');

const tag = mongoose.Schema({
    tagNameId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tagName',
        required: true,
    },
    tagName: String,
    description: String,
    quantifier: Number
});

const Tag = mongoose.model('Tag', tag);
module.exports = Tag;