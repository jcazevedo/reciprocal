let assert = require('assert');
let fs = require('fs');

let correctFile = './correct.js';
let sourceFile = './main.js';

let correctF = eval(fs.readFileSync(correctFile) + "; f");
let newF = eval(fs.readFileSync(sourceFile) + "; f");

let nTests = 200;
let maxA = 200;
let maxB = 200;

for (let t = 0; t < nTests; t++) {
  let a = Math.floor(Math.random() * maxA) + 1;
  let b = Math.floor(Math.random() * maxB) + 1;
  let resCorrect = correctF(a, b);
  let res = newF(a, b);
  assert.equal(resCorrect, res);
}
