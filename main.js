f = (alphabet, key, text, i=0, l = alphabet.length,res="",a2=alphabet+alphabet) =>
  [...text].map(ch => {
    if (~(c = alphabet.search(ch))) {
      r=a2.indexOf(key[i % key.length], c);
      ++i;
      res+=(r == -1 ? ch : alphabet[(r - c) % l]);
    }
  })&&res;
