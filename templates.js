const router = require("express").Router();
const Template = require("../models/Template");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const tpl = await Template.create({
    userId: req.user.id,
    name: req.body.name,
    fields: req.body.fields
  });
  res.json(tpl);
});

router.get("/", auth, async (req, res) => {
  res.json(await Template.find({ userId: req.user.id }));
});

module.exports = router;
