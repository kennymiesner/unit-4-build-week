const bcrypt = require("bcryptjs");
const router = require("express").Router();
const { validateInput, userEmailExist } = require("../middleware");
const Users = require("../users/users-model.js");
const tokenBuilder = require("./token-builder");

router.post("/register", userEmailExist, (req, res, next) => {
  let user = req.body;

  const rounds = process.env.BCRYPT_ROUNDS || 8;
  const hash = bcrypt.hashSync(user.password, rounds);

  user.password = hash;

  Users.insertUser(user)
    .then((saved) => {
      res.status(201).json({ message: `Welcome, ${saved.user_email}` });
    })
    .catch(next);
});

router.post("/login", validateInput, (req, res, next) => {
  let { user_email, password } = req.body;
  Users.findBy({ user_email })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenBuilder(user);
        res.status(200).json({
          message: `welcome, ${user.user_email}`,
          role_name: user.role_name,
          user_id: user.user_id,
          token,
        });
      } else {
        res.status(401).json({ message: "invalid email or password" });
      }
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
