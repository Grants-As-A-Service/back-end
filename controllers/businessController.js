const Business = require("../models/business.js");

const getBusiness = async (req,res) => {
    try {
        const businesses = await Business.find();
        
        res.status(200).json(businesses);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const createBusiness = async (req,res) => {
    try {
        const business = new Business({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            city: req.body.city,
            province: req.body.province,
            postalCode: req.body.postalCode,
            industry: req.body.industry,
            projects: req.body.projects
        })
        const result = await business.save();
        
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = {getBusiness, createBusiness};