exports.error404 = (req, res, next) => {
  console.log("Requested Resource not found!");
  res.status(404).json({
    message: "Request Resource not Found!",
    error: "Kindly check your url and its params",
  });
};
