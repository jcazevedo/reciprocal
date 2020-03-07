f = (alphabet, key, text, i=0) =>
  [...text].map(ch => 
                (~(c = alphabet.indexOf(ch))) ? (alphabet[(alphabet+alphabet).indexOf(key[i++ % key.length], c) - c]||ch)  : ""
               ).join``;
