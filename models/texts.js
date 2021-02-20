const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const textSchema = new Schema({
    wholeText: {
        type: String,
        required: true
    },
    textDict: {
        type: Object,
        required: true
    },
    textDict2words: {
        type: Object,
        required: true
    }
})

const Text = mongoose.model('Text', textSchema);
module.exports = Text;