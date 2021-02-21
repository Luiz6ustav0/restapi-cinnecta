const express = require("express");
const router = express.Router();
const textToVec = require("../utils/textToVec");
const textController = require("../controllers/textController");

const Text = require("../models/texts");

router.get("/vocab", textController.getVocab);

router.get("/singleWordVecs", textController.getSingleWordVecs);

router.post("/", textController.postNTexts);

module.exports = router;
