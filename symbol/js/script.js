'use strict';

const obj = {
    'name': 'Test',
     [Symbol('id')]: 1
}

// let id = Symbol('id');

// obj[id] = 1;

console.log(obj);
console.log(obj[id]);
