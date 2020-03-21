# Reciprocal

This is the 1st place solution to [Pixels Camp 2020][pixels-camp]'s [Quizshow
Challenge #3][quizshow-challenge]. The challenge was creating an implementation
of the [Beaufort Cipher][beaufort-cipher], in JavaScript, using as few bytes as
possible. The final submission is in the [main.js][submission] file.

## Instructions

`correct.js` has the first correct submission for the challenge, which was used
to test locally against following submissions. `reciprocal_test.js` contains the
code to generate a suite of randomized tests, comparing the output of the
function defined in `main.js` against the function defined in `correct.js`. The
tests can be run with:

    $ npm run test
    
The code in `main.js` can be minified (to `out.js`) using [Google's Closure
Compiler][closure-compiler] with:

    $ npm run minify
    
[pixels-camp]: https://pixels.camp/
[quizshow-challenge]: https://quiz.pixels.camp/challenge/2020-3-reciprocal-a40248e9-be306dbd2cc46e33/
[beaufort-cipher]: https://en.wikipedia.org/wiki/Beaufort_cipher
[closure-compiler]: https://developers.google.com/closure/compiler
[submission]: https://github.com/jcazevedo/reciprocal/blob/7c5711402f7faee7ba9f8b7462043726309eebd9/main.js
