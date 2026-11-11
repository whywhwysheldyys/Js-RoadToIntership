'use strict';

function amountOfPages(summary) {
    let digitsCount = 0;
    let page = 1;

    while (digitsCount < summary) {
        digitsCount += String(page).length;
        page++
    }

    return page - 1;
}

console.log(amountOfPages(5));
console.log(amountOfPages(25));
console.log(amountOfPages(1095));
