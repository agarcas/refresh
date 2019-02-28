const net = require("net"); 
const port = 3000; 
// const server = ("localhost");

const server = net.createServer(function(socket){
    socket.write("Echo server\r\n");
    socket.pipe(socket);
});

server.listen(port);