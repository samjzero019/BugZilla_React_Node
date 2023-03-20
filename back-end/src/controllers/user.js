const User = require("../models/User");

exports.getUsers = (req, res, next) => {
 
  User.find()
    .then((allUsers) => {
      return res.status(200).json({
        message: "Successful",
        data: allUsers,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "failed to get Users",
        error: err.message,
      });
    });
};

exports.changeUserRole = (req, res, next) => {
  const { id } = req.params;
  const { role } = req.body;

  User.findOneAndUpdate(
    { _id: id },
    { role: role },
    { new: true, runValidators: true }
  )
    .then((response) => {
      res.status(200).json({
        message: "Login Successful",
        response: {
          _id: response._id,
          email: response.email,
          role: response.role,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to change User Role",
        error: err.message,
      });
    });
};
