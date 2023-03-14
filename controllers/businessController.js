const Business = require("../models/business.js");

const getBusiness = async (req,res) => {
    try {
        const email = req.body.email;
        const business = await Business.findOne({'email': email});
        res.status(200).json(business);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const createBusiness = async (req,res) => {
    try {
        const business = new Business({
            accountId: req.body.business.accountId,
            name: req.body.business.name,
            phone: req.body.business.phone,
            address: req.body.business.address,
            city: req.body.business.city,
            province: req.body.business.province,
            postalCode: req.body.business.postalCode,
            industry: req.body.business.industry,
            fte: req.body.business.fte,
            pte: req.body.business.pte,
            annualRevenue: req.body.business.annualRevenue,
            yearOfInception: req.body.business.yearOfInception,
            projects: req.body.business.projects
        })
        const result = await business.save();
        res.status(200).json(result);
        res.send();
    } catch (error) {
        res.status(404).json({message: error.message});
        res.send();
    }
}

module.exports = {getBusiness, createBusiness};