const Text = require("../models/texts");
const textToVec = require("../utils/textToVec");

const getVocab = async (req, res) => {
  try {
    let twoWords = req.query.two_words;
    let index = 0;
    if (twoWords == "true") index = 1;

    const textInfo = await Text.findOne({});
    if (textInfo.vocab && textInfo.vocab[index].length > 0) {
      res.status(200).json(textInfo.vocab[index]);
    } else {
      res.status(404).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getWordFrequencyVecs = async (req, res) => {
  try {
    let twoWords = req.query.two_words;
    let index = 0;
    if (twoWords == "true") index = 1;

    const textInfo = await Text.find({});
    if (textInfo && textInfo[0].wordFrequencyVecs[index].length > 0) {
      res
        .status(200)
        .json({ vectorsPerDocument: textInfo[0].wordFrequencyVecs[index] });
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
  tVec.create2wordsVocab();
  let frequencyArrs = cleanedTexts.map((arr) => tVec.createFrequencyVec(arr));
  let frequencyArrs2words = cleanedTexts.map((arr) =>
    tVec.create2WordsFrequencyVec(arr)
  );

  let newItem = Text({
    vocab: [tVec.vocabulary, tVec.vocabulary2words],
    wordFrequencyVecs: [frequencyArrs, frequencyArrs2words]
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
    Text.deleteMany({}).then((result) => res.status(200).send());
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getVocab, getWordFrequencyVecs, postNTexts, clean };
