const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const textSchema = new Schema({
    wholeText: {
        type: Object,
        required: true
    },
    vocab: {
        type: Object,
        required: true
    },
    textDicts: {
        type: Object,
        required: true
    },
    textDicts2words: {
        type: Object,
        required: true
    }
})

const Text = mongoose.model('Text', textSchema);
module.exports = Text;