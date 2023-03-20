const express = require("express");

const authController = require("../controllers/auth");

const isLoggedIn = require("../middlewares/is-auth");

const router = express.Router();

router.post("/signup", authController.handleSignUp);
router.post("/signin", authController.handleSignIn);
router.post("/signout", isLoggedIn, authController.handleSignOut);

module.exports = router;
