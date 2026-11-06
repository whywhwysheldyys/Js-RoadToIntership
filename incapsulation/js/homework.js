'use strict';

class UserInfo {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }

    #lvl = '30';

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age >= 18) {
            this._age = age;
        } else {
            console.log(`Enter correct age`);
        }
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (typeof name === 'string') {
            this._name = name.trim();
        } else {
            console.log(`Enter correct name`);
        }
    }

    get lvl() {
        return this.#lvl;
    }

    set lvl(lvl) {
        if (typeof lvl === 'number' && lvl > 0) {
            this.#lvl = lvl;
        } else {
            console.log(`Enter correct lvl`);
        }
    }
};


let userFirst = new UserInfo(45, 'qwewqe');
console.log(userFirst.age);
console.log(userFirst.age = 17);
console.log(userFirst.lvl = 32);
console.log(userFirst.lvl);
