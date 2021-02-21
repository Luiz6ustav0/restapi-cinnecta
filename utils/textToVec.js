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
        freqVec1[i] = vec.filter((w) => w == this.vocabulary[i]).length;
      }
    }

    return freqVec1;
  }
}

module.exports = textToVec;
