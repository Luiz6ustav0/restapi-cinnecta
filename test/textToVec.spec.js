const textToVec = require('../utils/textToVec');

describe('text utils functions', () => {
  let tVec;
  beforeEach(() => {
    tVec = new textToVec();
  });

  it('should remove unwanted characters from text', () => {
    const text = tVec.cleanText('Falar é fácil. Mostre-me o código.');

    expect(text).toEqual(['falar', 'fácil', 'mostre', 'código']);
  });

  it('should create vocab from cleaned array', () => {
    const text = tVec.cleanText('Falar é fácil. Mostre-me o código.');
    const text2 = tVec.cleanText(
      'É fácil escrever código. Difícil é escrever código que funcione',
    );

    const res = tVec.createVocab([text, text2]);

    expect(res).toEqual([
      'falar',
      'fácil',
      'mostre',
      'código',
      'escrever',
      'difícil',
      'funcione',
    ]);
  });
});
