'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for (let key in user) console.log(key);

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
})

// writable
// enumerable
// configurable
