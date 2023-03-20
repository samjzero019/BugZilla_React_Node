module.exports = (req, res, next) => {
  if (!req.session || !req.session.isLoggedIn) {
    return res.status(401).json({ message: "Please Login! " });
  }
  next();
};
