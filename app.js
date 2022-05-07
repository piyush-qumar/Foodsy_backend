const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const User = require("./user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//app.use('/',express.static(path.join(__dirname,'static')))
app.use(bodyParser.json());

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
  });
}

  app.post("/api/register", (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const rollno = req.body.rollno;
    const colname = req.body.colname;
    const email = req.body.userid;
    const phone = req.body.phone;
    const pwd = req.body.password;
    const confpwd = req.body.confpwd;

    const user = new User({
      name: name,
      college: college,
      rollno: rollno,
      email: userid,
      phone: phone,
      pwd: password,
    });
    user
      .save()
      .then((user) => {
        console.log(user);
        res.json("success", user);
      })
      .catch((err) => {
        console.log(err);
        res.send("Please try again later");
      });

    res.json({ status: "ok" });
  });
app.post("/error", (req, res) => {
  res.send("help");
});
app.get("/", (req, res) => {
  res.send("Welcome to foodsy");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
