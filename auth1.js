const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  await new User(req.body).save();
  res.send("OK");
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("No user");

  const ok = await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.status(400).send("Wrong password");

  const token = jwt.sign({ id: user._id }, "SECRET");
  res.json({ token });
});

module.exports = router;
