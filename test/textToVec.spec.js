const textToVec = require("../utils/textToVec");

describe("text utils functions", () => {
  let tVec;
  beforeEach(() => {
    tVec = new textToVec();
  });

  it("should remove unwanted characters from text", () => {
    const text = tVec.cleanText("Falar é fácil. Mostre-me o código.");

    expect(text).toEqual(["falar", "fácil", "mostre", "código"]);
  });

  it("should create vocab from cleaned array", () => {
    const text = tVec.cleanText("Falar é fácil. Mostre-me o código.");
    const text2 = tVec.cleanText(
      "É fácil escrever código. Difícil é escrever código que funcione"
    );

    tVec.createVocab(text);
    const res = tVec.createVocab(text2);

    expect(res).toEqual([
      "falar",
      "fácil",
      "mostre",
      "código",
      "escrever",
      "difícil",
      "funcione",
    ]);
  });

  it("should create frequency vectors", () => {
    const text = "Falar é fácil. Mostre-me o código.";
    const text2 =
      "É fácil escrever código. Difícil é escrever código que funcione";

    let cleanTexts = [text, text2].map((t) => tVec.cleanText(t));
    cleanTexts.map((arr) => tVec.createVocab(arr));

    let expected = [1, 1, 1, 1, 0, 0, 0];
    let res = tVec.createFrequencyVec(cleanTexts[0]);

    expect(res).toEqual(expected);
  });

  it("should create 2 words vocab", () => {
    const text = tVec.cleanText("Falar é fácil. Mostre-me o código.");
    const text2 = tVec.cleanText(
      "É fácil escrever código. Difícil é escrever código que funcione"
    );

    tVec.createVocab(text);
    tVec.createVocab(text2);
    const res = tVec.create2wordsVocab();

    expect(res).toEqual([
      "falar fácil",
      "fácil mostre",
      "mostre código",
      "código escrever",
      "escrever difícil",
      "difícil funcione",
    ]);
  });

  it("should create 2 word frequency vec", () => {
    const text = "Falar é fácil. Mostre-me o código.";
    const text2 =
      "É fácil escrever código. Difícil é escrever código que funcione";

    let cleanTexts = [text, text2].map((t) => tVec.cleanText(t));
    cleanTexts.map((arr) => tVec.createVocab(arr));
    tVec.create2wordsVocab();

    let expected = [1, 1, 1, 0, 0, 0];
    let res = tVec.create2WordsFrequencyVec(cleanTexts[0]);

    expect(res).toEqual(expected);
  })
});
