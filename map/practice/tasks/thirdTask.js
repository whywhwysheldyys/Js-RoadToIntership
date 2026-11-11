'use strict';

const adminRole = {role: 'Admin'};
const permissions = new Map([
    [adminRole, ['create', 'edit', 'delete']]
]);

console.log(permissions.get(adminRole));
