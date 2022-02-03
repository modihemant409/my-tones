const express = require("express");
const ToneController = require("../controllers/toneController");

const router = express.Router();

router.get("/get-all-tones", ToneController.getAllTones);
router.get("/download-tone/:toneId", ToneController.downloadTone);
module.exports = router;
