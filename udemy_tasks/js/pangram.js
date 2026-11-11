'use strict';

function isPangram(string) {
    const lowerString = string.toLowerCase();
    const lettersOnly = lowerString.replace(/[^a-z]/g, '');
    const uniqueLetters = new Set(lettersOnly);

    return uniqueLetters.size === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello world'));
