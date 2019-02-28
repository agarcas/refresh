const net = require ("net");
const port = 3000;

let server = net.createServer(function(socket){
    socket.write("Echo server:\n");

    socket.on("data", function(data){
        socket.write(data);
        process.stdout.write(data);
        setTimeout(() => {
            console.log('shutting down server...');
            server.close();
            process.exit(0);
        }, 10000)
    });
});

server.listen(port, function(){
    console.log("Server listening in port: " + port);
});