const User = require('../model/user')

const getUsers = async (req,res)=>{
    const users = await User.find()
    if(!users) return res.json({
        status : 404,
        message : 'No users found'
    })
    res.json(users)
}

const postUsers = async (req,res)=>{
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
} 

module.exports = {
    getUsers,
    postUsers
}