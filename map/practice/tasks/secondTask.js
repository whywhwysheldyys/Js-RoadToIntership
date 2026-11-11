'use strict';

const requests = ['id-101', 'id-102', 'id-101', 'id-103', 'id-102', 'id-101'];
const counts = new Map();

for (let id of requests) {
    if (counts.has(id)) {
        counts.set(id, counts.get(id) + 1);
    } else {
        counts.set(id, 1);
    }
}

console.log(counts);
