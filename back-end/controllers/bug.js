const Bug = require("../models/Bug");

exports.createBug = (req, res, next) => {
  const bug = req.body; // rather than de-structure each
  Bug.create(bug)
    .then((result) => {
      res
        .status(201)
        .json({ message: "Bug Created Successfully ", result: result });
    })
    .catch((err) => {
      console.log("Error During Bug Creation", err.message);
      res
        .status(500)
        .json({ message: "Bug Creation Failed", error: err.message });
    });
};

exports.getAllBugs = (req, res, next) => {
  Bug.find()
    .then((allBugs) => {
      res.status(200).json({
        message: "Successful",
        data: allBugs,
      });
    })
    .catch((err) => {
      console.log("Failed to fetch all bugs", err.message);
      res.status(500).json({
        message: "Failed to fetch all bugs",
        error: err.message,
      });
    });
};
// exports.getBugByID = (req, res, next) => {};
// exports.updateBugByID = (req, res, next) => {};
exports.deleteBugByID = (req, res, next) => {
  const { id } = req.params;
  Bug.deleteOne({ _id: id })
    .then((result) => {
      if (result.deletedCount <= 0) {
        return res.json({
          message: "No Record Found with id: " + id,
        });
      }
      res.json({
        message: "Bug with id: " + id + " deleted successfully  ",
        result: result,
      });
    })
    .catch((err) => {
      console.log("Failed to delete Bug with id: ", id);
      res.json({
        message: "Failed to delete bug with id: " + id,
        error: err.message,
      });
    });
};
