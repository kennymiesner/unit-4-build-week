const Users = require("../users/users-model.js");
const Items = require("../items/items-model");

const validateInput = (req, res, next) => {
  const { user_email, password } = req.body;
  if (user_email === undefined || password === undefined) {
    res.status(400).json({ message: "user_email and password required" });
  } else {
    next();
  }
};
const userEmailExist = async (req, res, next) => {
  const allUsers = await Users.getAllUsers();
  const userExist = allUsers.find((u) => u.user_email === req.body.user_email);
  if (userExist) {
    res.status(400).json({ message: "this email has already been registered" });
  } else {
    next();
  }
};
const checkUserId = async (req, res, next) => {
  const allUsers = await Users.getAllUsers();
  const userIdExist = allUsers.find((u) => u.user_id == req.params.user_id);
  if (!userIdExist) {
    res.status(400).json({ message: "User doesn't exist" });
  } else {
    next();
  }
};

async function checkItemId(req, res, next) {
  try {
    const { id } = req.params;
    const possibleItem = await Items.findById(id);
    if (possibleItem) {
      req.item = possibleItem;
      next();
    } else {
      res.status(400).json({ message: "Item doesn't exist" });
    }
  } catch (err) {
    next(err);
  }
}
module.exports = {
  validateInput,
  userEmailExist,
  checkItemId,
  checkUserId,
};
