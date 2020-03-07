f = (alphabet, key, text, skip=0, l = alphabet.length) =>
  text.split("").map((ch, i) => {
    let resC = alphabet.search(ch);
    if (resC == -1) {
      skip++;
      return "";
    }
    let resR = -1;
    for (let j = resC; j < resC + l; ++j) {
      if (alphabet[j % l] == key[(i - skip) % key.length]) {
        resR = j - resC;
        break;
      }
    }
    return (resR == -1 ? ch : alphabet[resR % l]);
  }).join("");
