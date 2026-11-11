'use strict';

const blacklist = new Set(['token-111', 'token-222', 'token-333']);
const incomingToken = 'token-222';

if (blacklist.has(incomingToken)) {
    console.log('Доступ запрещен: токен в черном списке');
} else {
    console.log('Доступ разрешен');
}
