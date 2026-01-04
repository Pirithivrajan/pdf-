const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", UserSchema);
