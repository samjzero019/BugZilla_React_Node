const express = require("express");

const router = express.Router();

const bugController = require("../controllers/bug");
const isLoggedIn = require("../middlewares/is-auth");

//Bug Routes
router.post("/bug", isLoggedIn, bugController.createBug);
router.get("/bug", isLoggedIn, bugController.getBugs);
router.get("/bug/:id", isLoggedIn, bugController.getBugByID);
router.put("/bug/:id", isLoggedIn, bugController.updateBugByID);
router.delete("/bug/:id", isLoggedIn, bugController.deleteBugByID);

router.put("/bug/assign/:id", isLoggedIn, bugController.assignBug);
router.put("/bug/status/:id", isLoggedIn, bugController.updateBugStatus);

module.exports = router;
