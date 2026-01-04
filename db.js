const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/pdf_saas", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("MongoDB connected");
};
