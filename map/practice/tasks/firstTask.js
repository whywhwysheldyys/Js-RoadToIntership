'use strict';

const attendance = new Map([
    ['Иван', true],
    ['Ольга', false],
    ['Петр', true]
]);

console.log(attendance.has('Анна'));

console.log(attendance.set('Ольга', true));

console.log(attendance.size);

for (let [name, status] of attendance) {
    console.log(`Студент ${name}, Статус: ${status}`);
}
