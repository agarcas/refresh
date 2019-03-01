const net = require("net"); 
const port = 3000; 
// const server = ("localhost");
let dataServer = "SOY EL SERVIDOR"

let server = net.createServer(function(socket){
    socket.write("Echo server\r\n");
    socket.pipe(socket);
    /*socket.on("data",function(data){
        socket.write(data);
        process.stdout.write(data);*/
        setTimeout(()=>{
            server.close();
        },2000)
    //});   
});

server.on("Error", function(){
    console.log("Error de connexión: ");
});

server.listen(port, function(){
    console.log("server listening in port number:" + port);
});