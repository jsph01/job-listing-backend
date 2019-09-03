const User = require('../models/User');
const createJWT = require('../utils/createJWT');

function index(req, res) {
    User.find({}, (error, foundUsers) => {
        if(error) return res.status(500).json({
            message: 'mongoose encountered an error',
            error
        });
        res.json({ users: foundUsers });
    });
}

function show(req, res) {
    User.findById(req.params.id, (error, foundUser) => {
        if(error) return res.status(500).json({
            message: 'mongoose encountered an error',
            error
        });
        res.status(200).json({ user: foundUser });
    });
}

function update(req, res) {
    if(req.body.user.username) return res.status(403).json({
        message: 'the username may not be modified'
    });
    
    User.findByIdAndUpdate(req.params.id, req.body.user, { new: true },
        (error, updatedUser) =>
    {
        if(error) return res.status(500).json({
            message: 'mongoose encountered an error',
            error
        });
        res.status(200).json({ token: createJWT(updatedUser) });
    });
}

module.exports = {
    index,
    show,
    update
};
