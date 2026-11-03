'use strict';

const persone = {
    name: 'Alex',
    tel: '+74444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);

// expr or decl
// безымянная функция ((x, y) => console.log(x + y))(3, 4);
// одинарные логические операторы | И &
// узнать что может быть в аргументах функции и не может быть
// как получить нан
// callback func
// closure
// DOM
// рекурсия с практикой (фибоначи
// async defer  зачем
// setTimeout  и setInterval
// сборщик мусора
// date
// rest
// прототипы
// раздел 14 юдеми oop
