module.exports = (req, res, next) => {
  if (req.session.current_user.role !== "manager") {
    return res.status(401).json({
      message: "Role Permission Restriction",
      error: "Only Manager Role Can get user details!",
    });
  }
};
