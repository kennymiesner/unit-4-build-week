const router = require("express").Router();
const Users = require("./users-model.js");
const Items = require("../items/items-model");
const { checkUserId } = require("../middleware");

router.get("/", async (req, res) => {
  res.json(await Users.getAllUsers());
});
router.get("/:user_id/listed-items", checkUserId, (req, res, next) => {
  Items.findItemByListingUserId(req.params.user_id)
    .then((messages) => {
      res.status(200).json(messages);
    })
    .catch((error) => {
      next(error);
    });
});
module.exports = router;
