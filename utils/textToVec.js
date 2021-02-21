class textToVec {
  vocabulary = [];

  cleanText(text) {
    text = text.toLowerCase();
    text = text.replace(/[`~!()_|+?;@#"$\-=%^&*:',.<>]/gi, " ");
    text = text.split(" ").filter((word) => word.length > 3);

    return text;
  }

  createVocab(textArr) {
    let vocab = Array(...new Set(textArr));
    vocab.map((word) => {
      if (!this.vocabulary.includes(word)) this.vocabulary.push(word);
    });
    return this.vocabulary;
  }

  createFrequencyVec(vec) {
    let freqVec1 = new Array(this.vocabulary.length);
    for (let i = 0; i < this.vocabulary.length; i++) freqVec1[i] = 0;

    for (let i = 0; i < this.vocabulary.length; ++i) {
      if (vec.includes(this.vocabulary[i])) {
        freqVec1[i] = vec.filter(w => w == this.vocabulary[i]).length;
      }
    }

    return freqVec1;
  }

  calculateAll(text1, text2) {
    let arr1 = this.cleanText(text1);
    let arr2 = this.cleanText(text2);
    let vocab = [...this.createVocab(arr1, arr2)]; // Converting set back to arr
    let freqVecs = this.creteFrequencyVecs(vocab, arr1, arr2);

    return {
      vocabulary: vocab,
      vec1: freqVecs.freqVec1,
      vec2: freqVecs.freqVec2,
    };
  }
}

module.exports = textToVec;
