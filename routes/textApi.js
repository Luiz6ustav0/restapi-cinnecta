const express = require("express");
const router = express.Router();
const textToVec = require("../utils/textToVec");
const textController = require("../controllers/textController");

const Text = require("../models/texts");

router.get("/vocabsingle", textController.getSingleWordVocab);

router.get("/singleWordVecs", textController.getSingleWordVecs);

router.post("/", textController.postNTexts);

router.delete("/clean", textController.clean);

module.exports = router;
