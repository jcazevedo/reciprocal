f = (alphabet, key, text, i=0, l = alphabet.length,res="",a2=alphabet+alphabet) =>
  [...text].map(ch => {
    res+=(~(c = alphabet.search(ch))) ? ((~(r=a2.indexOf(key[i++ % key.length], c))) ? a2[r - c] : ch)  : ""
  })&&res;
