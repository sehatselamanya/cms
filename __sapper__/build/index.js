// generated by sapper build at 2020-09-18T05:54:38.356Z
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.PORT = process.env.PORT || 3000;

console.log('Starting server on port ' + process.env.PORT);
require('./server/server.js');