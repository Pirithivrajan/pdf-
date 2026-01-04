const express = require("express");
const cors = require("cors");
const db = require("./db");

db();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/templates", require("./routes/templates"));

app.listen(3000, () => console.log("Backend running on 3000"));
