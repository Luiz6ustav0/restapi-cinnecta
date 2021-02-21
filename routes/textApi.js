const express = require("express");
const router = express.Router();
const textToVec = require("../utils/textToVec");
const textController = require("../controllers/textController");

const Text = require("../models/texts");

router.get("/vocab", textController.getVocab);

router.get("/wordfreq", textController.getWordFrequencyVecs);

router.post("/", textController.postNTexts);

router.delete("/clean", textController.clean);

module.exports = router;
