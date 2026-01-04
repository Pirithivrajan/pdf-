const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    req.user = jwt.verify(token, "SECRET");
    next();
  } catch {
    res.status(401).send("Unauthorized");
  }
};
