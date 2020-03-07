let assert = require('assert');
let fs = require('fs');

let correctFile = './correct.js';
let sourceFile = './main.js';

let correctF = eval(fs.readFileSync(correctFile) + "; f");
let newF = eval(fs.readFileSync(sourceFile) + "; f");

let nTests = 100;
let maxAlphabet = 26;
let maxKey = 26;
let maxText = 100;
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let charactersLength = characters.length;

let generateAlphabet = (length) => {
  let result = "";
  let visited = [];
  for (let i = 0; i < length; ++i) {
    let next;
    do {
      next = Math.floor(Math.random() * charactersLength);
    } while (visited.includes(next))
    result += characters[next];
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
    result += characters[Math.floor(Math.random() * charactersLength)];
  }
  return result;
};

for (let t = 0; t < nTests; t++) {
  let alphabet = generateAlphabet(Math.floor(Math.random() * maxAlphabet) + 1);
  let key = generateKey(alphabet, Math.floor(Math.random() * maxKey));
  let text = generateText(Math.floor(Math.random() * maxText) + 1);
  console.log(alphabet, key, text);
  let resCorrect = correctF(alphabet, key, text);
  let res = newF(alphabet, key, text);
  assert.equal(resCorrect, res);
}
