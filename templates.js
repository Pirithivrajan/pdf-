const router = require("express").Router();
const Template = require("../models/Template");
const auth = require("../middleware/auth");

router.post("/", auth1, async (req, res) => {
  const tpl = await Template.create({
    userId: req.user.id,
    name: req.body.name,
    layout: req.body.layout
  });
  res.json(tpl);
});

router.get("/", auth1, async (req, res) => {
  res.json(await Template.find({ userId: req.user.id }));
});

module.exports = router;
