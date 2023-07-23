const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
const { route } = require("./routes/transactions");
const app = express();
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "hwytefyiowejbfgw8ehflwjkehfyiwejbfvuiwefhwkefwefjlwefm";
const PORT = process.env.PORT;

// miidlewares
app.use(express.json());
app.use(cors());

// routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);
require("./userDetails");
const User = mongoose.model("userInfo");
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not Found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ status: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});
//get expense data
require("./models/expenseModel");
const userr = mongoose.model("Expense");
app.get("/getAllUser", async (req, res) => {
  try {
    const allUser = await userr.find({});
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});
const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port:", PORT);
  });
};
server();
