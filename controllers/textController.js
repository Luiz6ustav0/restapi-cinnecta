const Text = require("../models/texts");
const textToVec = require("../utils/textToVec");

const getVocab = async (req, res) => {
  try {
    const textInfo = await Text.findOne({});
    if (textInfo.vocab && textInfo.vocab.length > 0) {
      res.status(200).json(textInfo.vocab);
    } else {
      res.status(404).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleWordVecs = async (req, res) => {
  try {
    const textInfo = await Text.find({});
    if (textInfo && textInfo[0].singleWordFrequencyVecs.length > 0) {
      res
        .status(200)
        .json({ vectorsPerDocument: textInfo[0].singleWordFrequencyVecs });
    } else {
      res.status(404).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const postNTexts = (req, res) => {
  const body = req.body;
  const tVec = new textToVec();

  let cleanedTexts = Object.keys(body).map(function (key) {
    const text = {
      key: key,
      body: body[key],
    };
    return tVec.cleanText(text.body);
  });
  cleanedTexts.map((arr) => tVec.createVocab(arr));
  let frequencyArrs = cleanedTexts.map((arr) => tVec.createFrequencyVec(arr));

  let newItem = Text({
    vocab: tVec.vocabulary,
    singleWordFrequencyVecs: frequencyArrs,
    twoWordsFrequencyVecs: frequencyArrs,
  });

  newItem
    .save()
    .then((result) => {
      res.status(201).send();
    })
    .catch((err) => console.log(err));
};

const clean = async (req, res) => {
  try {
    Text.deleteMany({}).then(result => res.status(200).send());
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getVocab, getSingleWordVecs, postNTexts, clean };
