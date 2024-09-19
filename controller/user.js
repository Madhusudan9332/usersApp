const User = require("../model/user");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  const users = await User.find().limit(req.query.limit || 10).skip((req.query.page-1) * (req.query.limit || 10) || 0);
  if (!users)
    return res.json({
      status: 404,
      message: "No users found",
    });
  res.json(users);
};

const postUsers = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashedPassword;
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  getUsers,
  postUsers,
};
