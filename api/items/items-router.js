const router = require("express").Router();
const Items = require("./items-model");
const { checkItemId, checkUserId } = require("../middleware");
router.get("/", (req, res, next) => {
  Items.getAllItems()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => next(err));
});

router.get("/:id", checkItemId, (req, res) => {
  res.json(req.item);
});

router.post("/", (req, res, next) => {
  Items.addItem(req.body)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/:id", checkItemId, (req, res, next) => {
  Items.update(req.params.id, req.body)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/:id", checkItemId, (req, res, next) => {
  Items.removeItem(req.params.id)
    .then(() => {
      res.status(200).json({ message: "The item has been removed" });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
