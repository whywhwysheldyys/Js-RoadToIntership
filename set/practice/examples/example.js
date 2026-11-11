'use strict';

// 1.создаем set
const uniqueTags = new Set(['javascript', 'react', 'nodejs']);

// добавляем новые элементы через .add()
uniqueTags.set;
uniqueTags.add('docker');
uniqueTags.add('javascript');

console.log(uniqueTags.size); // вывод 4, не 5 тк js уже есть

// 2.проверка наличия и удаление
console.log(uniqueTags.has('react')); //true, тк есть в сете
console.log(uniqueTags.has('java')); // false, тк нету в сете

uniqueTags.delete('react'); // удаляем react
console.log(uniqueTags.size); // 3

// 3.перебор элементов через for of
console.log('--- Список тегов ---');
for (let tag of uniqueTags) {
    console.log(tag);
} // деф перебор, нет отличий

// 4.уникализация массива, избавление от дубликатов
const numbers = [1, 2, 2, 3, 4, 4, 5, 1];
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
