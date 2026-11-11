'use strict';

// 1.создаем map
const map = new Map([
    ['name', 'Alex'],
    [25, 'age']
]);

// 2.добавляем данные или обновляем
map.set('role', 'Developer');

// 3.получение значения по ключу
console.log(map.get('name')); // вывод Alex
console.log(map.get(25)); // вывод age

// 4.проверка ключа(наличие ключа)
console.log(map.has('role')); // true, тк есть пара role - Developer

// 5.удаление элемента
map.delete(true);

// 6.размер коллекции(аналогично .length массива пишем без скобок)
console.log(map.size);

// 7.очищаем всю мапу
map.clear()
