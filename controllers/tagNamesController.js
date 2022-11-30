const TagNames = require("../models/tagName.js");

const getTagNames = async (req,res) => {
    console.log('Server: {GET} /tagname/getAll endpoint called');
    try {
        const tagNames = await TagNames.find();
        
        res.status(200).json(tagNames);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = {getTagNames};