const http = require('http');

const routes = require('./routes')

//trong thư mục nhận chỉ có 1 hàm
const server = http.createServer(routes);

//trong thư mục nhận chỉ có nhiều hàm
/*
const server = http.createServer(routes.handler);
const server = http.createServer(routes.someText);
*/

server.listen(3000)