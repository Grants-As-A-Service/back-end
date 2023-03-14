const Account = require("../models/account.js");

const getAccount = async (req,res) => {
    try {
        const email = req.body.email;
        const account = await Account.findOne({'email': email});
        res.status(200).json(account);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const createAccount = async (req,res) => {
    try {
        const account = new Account({
            name: req.body.user.name,
            phone: req.body.user.phone,
            email: req.body.user.email
        })
        const result = await account.save();
        res.status(200).json(result);
        res.send();
    } catch (error) {
        res.status(404).json({message: error.message});
        res.send();
    }
}

module.exports = {getAccount, createAccount};