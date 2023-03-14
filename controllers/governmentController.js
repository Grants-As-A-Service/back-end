const Government = require("../models/government.js");

const getGoverment = async (req,res) => {
    try {
        const email = req.body.email;
        const gov = await Government.findOne({'email': email});
        res.status(200).json(gov);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const createGovernment = async (req,res) => {
    try {
        const gov = new Government({
            accountId: req.body.user.accountid,
            name: req.body.user.name,
            level: req.body.user.level,
            govDetails: req.body.user.govdetails,
            email: req.body.user.email,
            annualFundingBudget: req.body.user.afb,
            fundedProjects: req.body.user.fp,
        });
        const result = await gov.save();
        res.status(200).json(result);
        res.send();
    } catch (error) {
        res.status(404).json({message: error.message});
        res.send();
    }
}

module.exports = {getGoverment, createGovernment};