const mongoose = require("mongoose");

module.exports = mongoose.model("Template", {
  userId: String,
  name: String,
  layout: Array,
  createdAt: { type: Date, default: Date.now }
});
