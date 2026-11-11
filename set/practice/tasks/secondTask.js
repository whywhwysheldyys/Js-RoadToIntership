'use strict';

const ips = ['192.168.1.1', '10.0.0.1', '192.168.1.1', '172.16.0.5', '10.0.0.1', '192.168.1.5'];

const ipsSet = [...new Set(ips)];

console.log(ipsSet);
