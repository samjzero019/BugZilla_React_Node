const express = require("express");

const router = express.Router();

const bugController = require("../controllers/bug");
const isLoggedIn = require("../middlewares/is-auth");
const isDev = require("../utils/developer-restriction");
const onlyManager = require("../utils/only-manager");
//Bug Routes
router.post("/bug", isLoggedIn, isDev, bugController.createBug);
router.get("/bug", isLoggedIn, isDev, bugController.getBugs);
router.get("/bug/:id", isLoggedIn, isDev, bugController.getBugByID);
router.put("/bug/:id", isLoggedIn, isDev, bugController.updateBugByID);
router.delete("/bug/:id", isLoggedIn, onlyManager, bugController.deleteBugByID);

router.put("/bug/assign/:id", isLoggedIn, onlyManager, bugController.assignBug);
router.put("/bug/status/:id", isLoggedIn, bugController.updateBugStatus);

module.exports = router;
