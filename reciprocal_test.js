let assert = require('assert');
let fs = require('fs');

let correctFile = './correct.js';
let sourceFile = './main.js';

let correctF = eval(fs.readFileSync(correctFile) + "; f");
let newF = eval(fs.readFileSync(sourceFile) + "; f");

let nTests = 1000;
let maxAlphabet = 200;
let maxKey = 200;
let maxText = 200;

let randomChar = () => String.fromCharCode(Math.random() * 96 + 32);

let generateAlphabet = (length) => {
  let result = "";
  let visited = [];
  for (let i = 0; i < length; ++i) {
    let next;
    do {
      next = randomChar();
    } while (visited.includes(next))
    result += next;
  }
  return result;
};

let generateKey = (alphabet, length) => {
  let result = "";
  for (let i = 0; i < length; ++i) {
    result += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return result;
};

let generateText = (length) => {
  let result = "";
  for (let i = 0; i < length; ++i) {
    result += randomChar();
  }
  return result;
};

let test = (alphabetSize, keySize, textSize) => {
  let alphabet = generateAlphabet(alphabetSize);
  let key = generateKey(alphabet, keySize);
  let text = generateText(textSize);
  let resCorrect = correctF(alphabet, key, text);
  let res = newF(alphabet, key, text);
  assert.equal(resCorrect, res);
};

for (let t = 0; t < nTests; t++) {
  test(
    Math.floor(Math.random() * (maxAlphabet - 1)) + 1,
    Math.floor(Math.random() * maxKey),
    Math.floor(Math.random() * maxText));
}

test(1, 0, 0);
test(1, 0, 10);
test(10, 0, 10);
test(10, 10, 10);
test(10, 10, 0);
