const User = require("../models/User");

exports.getUsers = (req, res, next) => {
  if (req.session.current_user.role !== "manager") {
    return res.status(401).json({
      message: "Role Permission Restriction",
      error: "Only Manager Role Can get user details!",
    });
  }
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

  if (req.session.current_user.role !== "manager" || role === "manager") {
    return res.status(401).json({
      message: "Role Permission Restriction",
      error: "Only Manager Role can assign  roles of lower hierarchy  !",
    });
  }

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
