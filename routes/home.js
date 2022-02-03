const express = require("express");
const homeController = require("../controllers/homeController");

const router = express.Router();

router.get("/types", homeController.getTypes);
router.get("/dashboard", homeController.getDashboard);
router.get("/all-categories", homeController.getAllCategories);
module.exports = router;
