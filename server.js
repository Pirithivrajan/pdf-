const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/templates", require("./routes/templates"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
