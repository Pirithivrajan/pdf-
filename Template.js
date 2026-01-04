const mongoose = require("mongoose");

module.exports = mongoose.model("Template", {
  userId: String,
  name: String,
  fields: Array
});
