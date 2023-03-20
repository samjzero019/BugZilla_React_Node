const express = require("express");

const userController = require("../controllers/user");

const isLoggedIn = require("../middlewares/is-auth");

const router = express.Router();

//User Routes
router.get("/users", isLoggedIn, userController.getUsers);
router.put("/user/role/:id", isLoggedIn, userController.changeUserRole);

module.exports = router;
