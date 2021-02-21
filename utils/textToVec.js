class textToVec {
    stopChars = "";

    cleanText(text) {
        text = text.replace(/[`~!()_|+?;@#"$\-=%^&*:',.<>]/gi, '');
        text = text.split(' ').filter(word => word.length > 3);
        return text
    }

    createVocab(arr, arr2) {
        let set2 = new Set(arr2);
        let vocab = new Set(arr);

        for (let elem of set2) {
            vocab.add(elem);
        }

        return vocab;

    }

    creteFrequencyVecs(vocabulary, arr1, arr2) {
        let freqVec1 = new Array(vocabulary.length);
        let freqVec2 = new Array(vocabulary.length);
        for (let i = 0; i < vocabulary.length; i++) freqVec1[i] = 0;
        for (let i = 0; i < vocabulary.length; i++) freqVec2[i] = 0;

        for (let i = 0; i < vocabulary.length; ++i) {
            if (arr1.includes(vocabulary[i])) {
                freqVec1[i] = arr1.filter(w => w == vocabulary[i]).length;
            }
            if (arr2.includes(vocabulary[i])) {
                freqVec2[i] = arr2.filter(w => w == vocabulary[i]).length;
            }
        }

        return { freqVec1, freqVec2 };
    }

    calculateAll(text1, text2) {
        let arr1 = this.cleanText(text1);
        let arr2 = this.cleanText(text2);
        let vocab = [...this.createVocab(arr1, arr2)]; // Converting set back to arr
        let freqVecs = this.creteFrequencyVecs(vocab, arr1, arr2);
        console.log("\n\n"); console.log(freqVecs.freqVec1, vocab);

        return { vocabulary: vocab, vec1: freqVecs.freqVec1, vec2: freqVecs.freqVec2 };
    }


}

module.exports = textToVec;