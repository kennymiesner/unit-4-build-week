const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("./config");

module.exports = function (user) {
  const payload = {
    subject: user.id,
    user_email: user.user_email,
    role_name: user.role_name,
  };
  const options = {
    expiresIn: "1d",
  };

  const token = jwt.sign(payload, JWT_SECRET, options);

  return token;
};
