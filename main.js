f = (alphabet, key, text, i=0, l = alphabet.length,a2=alphabet+alphabet) =>
  [...text].map(ch => 
                (~(c = alphabet.search(ch))) ? (a2[a2.indexOf(key[i++ % key.length], c) - c]||ch)  : ""
               ).join("");
