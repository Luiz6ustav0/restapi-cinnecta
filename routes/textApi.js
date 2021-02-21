const express = require('express');
const router = express.Router();
const textToVec = require('../utils/textToVec');

const Text = require('../models/texts');

router.post('/:text&:text2', (req, res) => {
    const tVec = new textToVec();
    let t1 = req.params.text.substring(6);
    let t2 = req.params.text2.substring(6);
    let dbObj = tVec.calculateAll(t1, t2);

    const newItem = Text({
        wholeText: [t1, t2],
        vocab: dbObj.vocabulary,
        textDicts: [dbObj.vec1, dbObj.vec2],
        textDicts2words: [dbObj.vec1, dbObj.vec2]
    })

    newItem.save()
        .then((result) => {
            res.status(201).send();
        })
        .catch((err) => console.log(err));

    res.status(201).send();
})

module.exports = router;