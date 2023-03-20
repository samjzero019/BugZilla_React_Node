const express = require("express");

const userController = require("../controllers/user");

const isLoggedIn = require("../middlewares/is-auth");
const onlyManager = require("../utils/only-manager");
const router = express.Router();

//User Routes
router.get("/users", isLoggedIn, onlyManager, userController.getUsers);
router.put(
  "/user/role/:id",
  isLoggedIn,
  onlyManager,
  userController.changeUserRole
);

module.exports = router;
