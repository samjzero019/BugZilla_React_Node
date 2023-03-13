const bcrypt = require("bcrypt");

const User = require("../models/User");

exports.handleSignUp = (req, res, next) => {
  console.log("Req has reached to signUp Handler with body: ", req.body);
  const { email, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 12);
  User.create({ email: email, password: hashedPassword, role: role })
    .then((result) => {
      res.json({
        message: `user with email: ${email}  and role: ${role} created Successfully`,
        result: { email: result.email, role: result.role, _id: result._id },
      });
    })
    .catch((err) => {
      console.log("user signup failed! with error: ", err.message);
      res.status(500).json({
        message: "user signup failed! with error: ",
        error: err.message,
      });
    });
};

exports.handleSignIn = (req, res, next) => {
  console.log("Req has reached to SignIn Handler with body: ", req.body);
  const { email, password } = req.body;

  User.findOne({ email: email })
    .then((user) => {
      const valid_pass = bcrypt.compareSync(password, user.password);
      return valid_pass;
    })
    .then((isLoggedIn) => {
      isLoggedIn
        ? res.status(200).json({ message: "Login Successfull" })
        : res.status(400).json({ message: "Password is Invalid!" });
    })
    .catch((err) => {
      console.log("Error during Login", err.message);
      res.status(500).json({
        message: "user Login failed! with error ",
        error: err.message,
      });
    });
};

exports.handleSignOut = (req, res, next) => {
  res.json("Signout Api");
};
