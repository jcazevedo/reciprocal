f = (alphabet, key, text) => {
  let tabula = [];
  for (let i = 0; i < alphabet.length; ++i) {
    tabula[i] = [];
    for (let j = 0; j < alphabet.length; ++j) {
      tabula[i][j] = alphabet[(j + i) % alphabet.length];
    }
  }
  let res = "";
  let skip = 0;
  for (let i = 0; i < text.length; ++i) {
    let resC = -1;
    for (let j = 0; j < tabula[0].length; ++j) {
      if (tabula[0][j] == text[i]) {
        resC = j;
        break;
      }
    }
    if (resC == -1) {
      skip++;
      continue;
    }
    let resR = -1;
    for (let j = 0; j < tabula.length; ++j) {
      if (tabula[j][resC] == key[(i - skip) % key.length]) {
        resR = j;
        break;
      }
    }
    if (resR == -1) {
      res += text[i];
    } else {
      res += tabula[resR][0];
    }
  }
  return res;
}
