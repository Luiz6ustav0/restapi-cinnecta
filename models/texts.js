const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const textSchema = new Schema({
    vocab: {
        type: Object,
        required: true
    },
    singleWordFrequencyVecs: {
        type: Object,
        required: true
    },
    twoWordsFrequencyVecs: {
        type: Object,
        required: true
    }
})

const Text = mongoose.model('Text', textSchema);
module.exports = Text;