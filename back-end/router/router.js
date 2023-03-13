const express = require("express");

const errorController = require("../controllers/error");
const authController = require("../controllers/auth");
const bugController = require("../controllers/bug");
const router = express.Router();

//User Routes
router.post("/signup", authController.handleSignUp);
router.post("/signin", authController.handleSignIn);
router.post("/signout", authController.handleSignOut);

//Bug Routes
router.post("/bug", bugController.createBug);
router.get("/bug", bugController.getAllBugs);
// router.get("/bug/:id", bugController.getBugByID);
// router.patch("/bug/:id", bugController.updateBugByID);
router.delete("/bug/:id", bugController.deleteBugByID);

// Common Routes
// in case api route is not registered!
router.use("/*", errorController.error404);

module.exports = router;
