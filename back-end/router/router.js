const express = require("express");

const errorController = require("../controllers/error");
const authController = require("../controllers/auth");
const bugController = require("../controllers/bug");

const isLoggedIn = require("../middlewares/is-auth");

const router = express.Router();

//User Routes
router.get("/users", authController.getUsers);

router.post("/signup", authController.handleSignUp);
router.post("/signin", authController.handleSignIn);
router.post("/signout", isLoggedIn, authController.handleSignOut);

//Bug Routes
router.post("/bug", isLoggedIn, bugController.createBug);
router.get("/bug", isLoggedIn, bugController.getBugs);
router.get("/bug/:id", isLoggedIn, bugController.getBugByID);
router.put("/bug/:id", isLoggedIn, bugController.updateBugByID);
router.delete("/bug/:id", isLoggedIn, bugController.deleteBugByID);

router.put("/bug/assign/:id", isLoggedIn, bugController.assignBug);
router.put("/bug/status/:id", isLoggedIn, bugController.updateBugStatus);

// Common Routes
// in case api route is not registered!
router.use("/*", errorController.error404);

module.exports = router;
