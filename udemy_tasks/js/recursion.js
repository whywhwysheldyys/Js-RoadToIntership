'use strict';

function deepCount(arr) {
    let count = arr.length;

    for (let item of arr) {

        if (Array.isArray(item)) {
            count += deepCount(item);
        }
    }

    return count;
}
