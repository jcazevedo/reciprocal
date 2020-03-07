f = (alphabet, key, text, i=0, l = alphabet.length,res="") =>
  [...text].map(ch => {
    if (~(c = alphabet.search(ch))) {
      r = -1;
      for (j = 0; j < l; ++j) {
        if (alphabet[(j + c) % l] == key[i % key.length]) {
          r = j;
          break;
        }
      }
      ++i;
      res+=(r == -1 ? ch : alphabet[r % l]);
    }
  })&&res;
