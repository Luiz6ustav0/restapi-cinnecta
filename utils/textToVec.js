class textToVec {
  vocabulary = [];
  vocabulary2words = [];

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

  create2wordsVocab() {
    if (this.vocabulary) {
      for (let i = 0; i < this.vocabulary.length - 1; i++) {
        let interestingTwoWords =
          this.vocabulary[i] + " " + this.vocabulary[i + 1];
        this.vocabulary2words.push(interestingTwoWords);
      }
      return this.vocabulary2words;
    } else
      console.log(
        "ERROR: Can't create 2 word vocab without single word vocab first"
      );
  }

  create2wordsVec(arr) {
    let nVec = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let interestingTwoWords = arr[i] + " " + arr[i + 1];
      nVec.push(interestingTwoWords);
    }
    return nVec;
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

  create2WordsFrequencyVec(vec) {
    let freqVec = new Array(this.vocabulary2words.length);
    let tempVec = this.create2wordsVec(vec);
    for (let i = 0; i < this.vocabulary2words.length; i++) freqVec[i] = 0;

    for (let i = 0; i < this.vocabulary2words.length; ++i) {
      if (tempVec.includes(this.vocabulary2words[i])) {
        freqVec[i] = tempVec.filter(
          (w) => w == this.vocabulary2words[i]
        ).length;
      }
    }

    return freqVec;
  }
}

module.exports = textToVec;
