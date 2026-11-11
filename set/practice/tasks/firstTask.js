const visitedCities = new Set(['Минск', 'Брест', 'Москва']);

console.log(visitedCities.has('Гродно'));
visitedCities.delete('Москва');

console.log(visitedCities.size);
