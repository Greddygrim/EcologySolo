require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require("express");
const bodypraser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { models, connectDB } = require("./config/mongoose");
const app = express();
app.use(bodypraser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  [res.json({ message: "hello" })];
});

app.post("/login", async (req, res) => {
  const userData = req.body;
  console.log(userData);

  // first we need to see if user with particular email exists
  const UserMmodel = models.User;
  const user = await UserMmodel.findOne({ email: userData.email }).exec();

  // if we don't have a user, send an error message to the client, and return from the function
  if (!user) {
    res.json({ error: true, msg: "Could not Login in" });
    return;
  }

  // validate the password using bcrpyt
  const matchedPasswords = await bcrypt.compare(
    userData.password,
    user.password
  );
  if (!matchedPasswords) {
    res.json({ error: true, msg: "Could no Login" });
    return;
  }

  // create a jwt token to authorize user
  const token = jwt.sign(
    {
      data: {
        email: user.email,
      },
      exp: 1000000000,
    },
    "supersecretstring182jsjv0asd"
  );

  console.log("'User: ", user);
  res.json({ sucess: "true", token: token });
});
app.post("/register", async (req, res) => {
  const userData = req.body;
  console.log(userData);

  // Check if password and confirm_password are the same
  if (userData.password !== userData.confirm_password) {
    res.json({ error: true, msg: "Could not register user" });
    return;
  }

  // hash user password
  const hashedPassword = bcrypt.hashSync(userData.password, 14);

  const UserMmodel = models.User;
  const newUser = await UserMmodel.create({
    email: userData.email,
    password: hashedPassword,
  });

  res.json(newUser);
});
connectDB()
  .then(() => {
    app.listen(8000, () => {
      console.log("listening@http://localhost:8000");
    });
  })

  .catch((error) => {
    console.error(error);
  });
