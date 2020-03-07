f = (alphabet, key, text, i=0, l = alphabet.length,a2=alphabet+alphabet) =>
  [...text].map(ch => 
    (~(c = alphabet.search(ch))) ? ((~(r=a2.indexOf(key[i++ % key.length], c))) ? a2[r - c] : ch)  : ""
               ).join("");
