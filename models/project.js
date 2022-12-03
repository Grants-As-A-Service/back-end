const mongoose = require('mongoose');

const project = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    capitalRequired: {
        type: Number,
        require: true,
        min: 0,
        max: 10
    },
    annualOperatingExpense: {
        type: Number,
        require: true,
        min: 0,
        max: 10
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    tags: [
        {
            tagId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'tag',
                required: true,
            },
            tagName: {
                type: String,
                required: true
            },
            tagDescription: {
                type: String,
                required: true
            },
            tagQuantifier: {
                type: String,
                required: true
            },

        }
    ],
});

const Project = mongoose.model('project', project);
module.exports = Project;