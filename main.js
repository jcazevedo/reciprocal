f = (alphabet, key, text, i=0) =>
  text.replace(/./g,ch => 
                (~(c = alphabet.indexOf(ch))) ? (alphabet[(alphabet+alphabet).indexOf(key[i++ % key.length], c) - c]||ch)  : ""
               )
